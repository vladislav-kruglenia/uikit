import './style.less';
import classNames from 'classnames';
import React, { Fragment, useLayoutEffect, useMemo, useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { groupByPropertyToDict } from '@itgenio/utils';
import { Checkbox } from '../checkbox';
import {
  SubtractFilledIcon,
  ChevronDownFilledIcon,
  ChevronUpFilledIcon,
  CheckmarkFilledIcon,
  DismissFilledIcon,
} from '../icons';
import { InputsContainer } from '../internal/components/inputsContainer';
import { generateId } from '../internal/utils/generateId';

const DROPDOWN_PADDING = 20;

type Sizes = 'small' | 'large';

type GroupConfig = { hideText?: boolean; hideSeparator?: boolean; separateNotGrouped?: boolean };

type Key = string | number;

export type MultiSelectOption<T extends Object = {}> = {
  label: string;
  value: Key | ({ key: Key } & T);
  group?: string;
  isDisabled?: boolean;
};

export type MultiSelectProps<Option extends MultiSelectOption> = {
  options?: Option[];
  values?: Option['value'][];
  onChange?: (selectedValues: Option['value'][]) => void;
  renderValues?: (values: Option['value'][]) => React.ReactNode;
  size?: Sizes;
  label?: string;
  idQa?: string;
  className?: string;
  error?: boolean;
  focus?: boolean;
  hover?: boolean;
  disabled?: boolean;
  helperText?: React.ReactNode;
  selectAllOptionLabel?: string;
  hasSelectAllOption?: boolean;
  inputText?: string;
  groupConfig?: GroupConfig;
  idQaForHelperText?: string;
};

export function MultiSelect<T extends MultiSelectOption>({
  size,
  label,
  idQa,
  className,
  focus,
  hover,
  disabled,
  error,
  values,
  options,
  helperText,
  onChange,
  selectAllOptionLabel,
  hasSelectAllOption,
  inputText,
  renderValues: renderValuesProp,
  groupConfig,
  idQaForHelperText,
}: MultiSelectProps<T>) {
  const [open, setOpen] = useState(false);
  const hasValue = values.length > 0;

  const ref = useRef(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const id = useMemo(() => generateId(), []);

  const canShowDropdown = open && !disabled;

  useOnClickOutside(ref, () => setOpen(false));

  useLayoutEffect(() => {
    if (!open) return;

    const dropdownElement = dropdownRef.current;

    if (!dropdownElement) return;

    const rect = dropdownElement.getBoundingClientRect();

    if (rect.right > window.innerWidth) {
      dropdownElement.style.left = `-${rect.right - window.innerWidth + DROPDOWN_PADDING}px`;
    }

    if (rect.bottom > window.innerHeight) {
      dropdownElement.style.top = `calc(100% - ${rect.bottom - window.innerHeight + DROPDOWN_PADDING}px)`;
    }
  }, [open]);

  const renderValues = () => {
    if (renderValuesProp) {
      return renderValuesProp(values);
    }

    return (
      <Fragment>
        {hasValue && !disabled && (
          <span
            id-qa={classNames({ [`${idQa}-count`]: idQa })}
            className={classNames('multi-select-count', size)}
            onClick={e => {
              e.stopPropagation();

              onChange([]);
            }}
          >
            {values.length}
            <DismissFilledIcon />
          </span>
        )}

        {inputText}
      </Fragment>
    );
  };

  const renderOptionItem = ({ label, value, isDisabled }: T) => {
    const isValueObj = typeof value === 'object';

    const isIncludeValue =
      typeof value === 'object'
        ? !!values.find(v => {
            return typeof v === 'object' && v.key === value.key;
          })
        : values.includes(value);

    const optionValue = isValueObj ? value.key : value;

    return (
      <li
        id-qa={classNames({ [`${idQa}-option-${optionValue}`]: idQa })}
        className={classNames('multi-select-option', size, { disabled: isDisabled })}
        key={optionValue}
        onChange={e => {
          e.stopPropagation();

          onChange(
            isIncludeValue
              ? values.filter(v => {
                  return (typeof v === 'object' ? v.key !== optionValue : v !== value) && !isDisabled;
                })
              : [...values, value]
          );
        }}
      >
        <Checkbox className="multi-select-checkbox" checked={isIncludeValue} disabled={isDisabled}>
          {label}
        </Checkbox>
      </li>
    );
  };

  const renderOptionsByGroups = () => {
    const optionsByGroupDict = groupByPropertyToDict(
      options.filter(o => !!o.group),
      option => option.group
    );

    const optionsWithoutGroup = options.filter(o => !o.group);

    return [
      ...optionsWithoutGroup.map(renderOptionItem),
      groupConfig?.separateNotGrouped && (
        <li key="without-group-separator">
          <div className="gkit-multiselect-separator" />
        </li>
      ),
      ...Object.values(optionsByGroupDict).map((options, index, groupedOptions) => [
        <li className="gkit-multiselect-group" key={options[0].group}>
          {!groupConfig?.hideText && <span className="text-xs gkit-multiselect-group-text">{options[0].group}</span>}
        </li>,
        options.map(renderOptionItem),
        index !== groupedOptions.length - 1 && !groupConfig?.hideSeparator && (
          <li key={`${options[0].group}-separator`}>
            <div className="gkit-multiselect-separator" />
          </li>
        ),
      ]),
    ];
  };

  return (
    <InputsContainer
      {...{
        ref,
        id,
        idQa,
        size,
        label,
        helperText,
        error,
        idQaForHelperText,
        className: classNames('gkit-multi-select', className),
      }}
    >
      <div
        className={classNames('multi-select-content', size, {
          hover,
          focus: focus || canShowDropdown,
          error,
          disabled,
        })}
        onClick={e => {
          e.stopPropagation();

          setOpen(!open);
        }}
        id={id}
      >
        <div className={classNames('multi-select-label', size, { disabled, selected: hasValue })}>{renderValues()}</div>

        <div className="multi-select-chevron">
          {canShowDropdown ? <ChevronUpFilledIcon /> : <ChevronDownFilledIcon />}
        </div>
      </div>

      {/* TODO: Нужно переделать на портал */}
      {canShowDropdown && (
        <ul ref={dropdownRef} id-qa={classNames({ [`${idQa}-dropdown`]: idQa })} className="multi-select-dropdown">
          {hasSelectAllOption && (
            <li
              id-qa={classNames({ [`${idQa}-option-select-all`]: idQa })}
              className={classNames('multi-select-option', size)}
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();

                options = options.filter(option => !option.isDisabled);

                onChange(values.length === options.length ? [] : options.map(({ value }) => value));
              }}
            >
              <Checkbox
                className="multi-select-checkbox"
                checked={hasValue}
                onChange={({ target: { checked } }) => {
                  onChange(!checked ? options.map(({ value, isDisabled }) => !isDisabled && value) : []);
                }}
                icon={<SubtractFilledIcon />}
                checkedIcon={values.length === options.length ? <CheckmarkFilledIcon /> : <SubtractFilledIcon />}
              >
                {selectAllOptionLabel}
              </Checkbox>
            </li>
          )}

          {options.some(({ group }) => !!group) ? renderOptionsByGroups() : options.map(renderOptionItem)}
        </ul>
      )}
    </InputsContainer>
  );
}

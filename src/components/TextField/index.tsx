import { FormValue } from '@src/utils';
import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { useController, useFormContext } from 'react-hook-form';

import { Input } from '../Input';
import { InputProps } from '../Input/Input.props';
import { numberWithCommas } from '@src/utils';

interface ITextField extends InputProps {
  name: keyof FormValue;
  rules?: any;
  formatNumber?: boolean;
}

const TextFieldComponent = React.forwardRef((props: ITextField, forwardedRef?: any) => {
  const { name, rules, formatNumber, defaultValue = '', ...inputProps } = props;

  const formContext = useFormContext();
  const control = formContext?.control;
  const errors = control?._formState?.errors;

  const { field } = useController({ name, control, rules, defaultValue });

  if (!formContext || !name) {
    const errorMessage = !name
      ? 'Form field must have a "name" prop!'
      : 'Form field must be a descendant of `FormProvider` as it uses `useFormContext`!';
    return <Input {...inputProps} error={errorMessage} />;
  }

  return (
    <Input
      {...inputProps}
      error={errors?.[name]?.message}
      onChangeText={field?.onChange}
      onBlur={field?.onBlur}
      value={formatNumber && field?.value ? numberWithCommas(field?.value) : field?.value}
      defaultValue={field?.value || defaultValue}
      ref={forwardedRef}
    />
  );
});

export const TextField = memo(TextFieldComponent, isEqual);

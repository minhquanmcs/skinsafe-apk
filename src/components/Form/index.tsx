import { TextInput } from 'react-native';
import isEqual from 'react-fast-compare';
import React, { memo, useRef } from 'react';
import { FormProvider } from 'react-hook-form';

import { checkType } from '@src/utils';

const FormComponent = (formMethods: any) => {
  const inputRef = useRef<TextInput[]>([]);
  const { handleSubmit, onSubmit, onErrors, control, rules } = formMethods;

  return (
    <FormProvider {...formMethods}>
      {(Array.isArray(formMethods.children) ? [...formMethods.children] : [formMethods.children]).map(
        (child, index) => {
          return child?.props?.name
            ? React.createElement(child.type, {
                ...{
                  returnKeyType: index < inputRef.current.length - 1 ? 'next' : 'done',
                  ...child.props,
                  onSubmitEditing: () => {
                    if (index < inputRef.current.length - 1) {
                      !formMethods.children?.[index + 1]?.props?.disabled && inputRef.current?.[index + 1]?.focus();
                    } else {
                      inputRef.current?.[index]?.blur();
                      handleSubmit(onSubmit, onErrors)();
                    }
                    if (child?.props?.onSubmitEditing && checkType(child?.props?.onSubmitEditing, 'function')) {
                      return child?.props?.onSubmitEditing();
                    }
                  },
                  rules: rules?.[child?.props?.name],
                  defaultValue: control?._defaultValues?.[child?.props?.name],
                  register: formMethods.register,
                  key: child.props.name,
                  ref: (el: TextInput) => (inputRef.current[index] = el),
                },
              })
            : child;
        },
      )}
    </FormProvider>
  );
};

export const Form = memo(FormComponent, isEqual);

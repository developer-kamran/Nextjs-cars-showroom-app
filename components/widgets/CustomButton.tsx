'use client';
import React from 'react';
import { CustomButtonProps } from '@/common/types';
import Image from 'next/image';

const CustomButton = ({
  title,
  containerStyles,
  textStyles,
  rightIcon,
  btnType,
  isDisabled,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType || 'button'}
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image src={rightIcon} alt='=>' fill className='object-contain' />
        </div>
      )}
    </button>
  );
};

export default CustomButton;

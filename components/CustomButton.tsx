"use client";
import React from 'react'
import Image from 'next/image'  
import { CustomButtonProps } from '@/types';

export const CustomButton = ({title, containerStyles, handleclick ,btnType}:CustomButtonProps) => {
  return (
    <button 
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleclick}
    >

    <span 
    className={'flex-1'}>
        {title}
    </span>
    </button>
  )
}

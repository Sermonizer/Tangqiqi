import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
export declare type ButtonSize = "lg" | "sm";
export declare type ButtonType = "primary" | "default" | "danger" | "link";
interface BaseButtonProps {
    /** 添加自定义的类 */
    className?: string;
    /** 设置Button的禁用 */
    disabled?: boolean;
    /** 设置Button的大小 */
    size?: ButtonSize;
    /** 设置Button的类型 */
    btnType?: ButtonType;
    children?: React.ReactNode;
    href?: string;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * ### Button
 * 引入方式
 * ~~~js
 * import { Button } from "tx-design"
 * ~~~
 */
export declare const Button: FC<ButtonProps>;
export default Button;

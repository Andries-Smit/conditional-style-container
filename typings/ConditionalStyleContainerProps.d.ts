/**
 * This file was generated from ConditionalStyleContainer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { CSSProperties } from "react";
import { ActionPreview } from "@mendix/pluggable-widgets-typing-generator/dist/typings";
import { DynamicValue } from "mendix";
import { ReactNode } from "react";

interface CommonProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
}

export interface ClassListType {
    description?: string;
    classExpression: DynamicValue<string>;
}

export interface StyleListType {
    description?: string;
    styleExpression: DynamicValue<string>;
}

export interface ClassListPreviewType {
    description?: string;
    classExpression: string;
}

export interface StyleListPreviewType {
    description?: string;
    styleExpression: string;
}

export interface ClassListVisibilityType {
    description: boolean;
    classExpression: boolean;
}

export interface StyleListVisibilityType {
    description: boolean;
    styleExpression: boolean;
}

export interface ConditionalStyleContainerContainerProps extends CommonProps {
    classList: ClassListType[];
    styleList: StyleListType[];
    content: ReactNode;
}

export interface ConditionalStyleContainerPreviewProps {
    class: string;
    style: string;
    styleObject: CSSProperties;
    classList: ClassListPreviewType[];
    styleList: StyleListPreviewType[];
    content: ReactNode;
}

export interface VisibilityMap {
    classList: ClassListVisibilityType[] | boolean;
    styleList: StyleListVisibilityType[] | boolean;
    content: boolean;
}

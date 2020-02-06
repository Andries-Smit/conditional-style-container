import { ReactNode, createElement } from "react";
import classNames from "classnames";
import { mergeStyles, parseStyle } from "./utils/Style";

import { hot } from "react-hot-loader/root";
import { ConditionalStyleContainerContainerProps } from "../typings/ConditionalStyleContainerProps";

const ConditionalStyleContainer = (props: ConditionalStyleContainerContainerProps): ReactNode => {
    const classes = classNames(
        props.class,
        props.classList
            .filter(
                c =>
                    c.classExpression &&
                    c.classExpression.status === "available" &&
                    c.classExpression.value.trim() !== ""
            )
            .map(c => c.classExpression!.value)
    );
    const style = mergeStyles(
        props.style,
        props.styleList
            .filter(
                s =>
                    s.styleExpression &&
                    s.styleExpression.status === "available" &&
                    s.styleExpression.value.trim() !== ""
            )
            .map(s => parseStyle(s.styleExpression!.value))
    );
    return (
        <div className={classes} style={style}>
            {props.content}
        </div>
    );
};

export default hot(ConditionalStyleContainer);

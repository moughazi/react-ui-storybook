import classNames from "classnames";

const getLastClassName = (defaultClassName: string) => {
    if (!defaultClassName) {
        return null;
    }

    const parts = defaultClassName.split(" ").filter(Boolean);
    return parts.length > 0 ? parts[parts.length - 1] : undefined;
};

const listClassModifier = (classModifier?: string) => {
    if (!classModifier) {
        return [];
    }

    return classModifier.split(" ");
};

export const getComponentClassName = (
    defaultClassName: string,
    className?: string,
    classModifier?: string,
) => {
    // Fail fast, when no defaultClassName we don't want to loop on modifier
    if (!defaultClassName) {
        return "";
    }

    const classWithoutModifier = getLastClassName(defaultClassName);
    const modifiers = listClassModifier(classModifier);

    const modifiersObject = modifiers
        .filter((it) => /\S/.test(it))
        .map((it) => {
            return `${classWithoutModifier}--${it}`;
        });

    return classNames(defaultClassName, className, modifiersObject);
};
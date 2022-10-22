import { Ref } from "react";

type Mutable<T> = {
  -readonly [k in keyof T]: T[k];
};

type Refs<T> = (Ref<T | null | undefined> | undefined)[];

/**
 * A utility function that merges multiple React refs into a single callback function
 *
 * @template T The type of the ref value
 * @param {...Refs<T>} refs An array of React refs
 * @returns A callback function that will call all the merged refs with the given value
 *
 * @example
 * const inputRef = useRef<HTMLInputElement>(null);
 * const divRef = useRef<HTMLDivElement>(null);
 * const mergedRef = mergeRefs(inputRef, divRef);
 *
 * <div ref={mergedRef}>
 *   <input ref={mergedRef} />
 * </div>
 */
const mergeRefs =
  <T>(...refs: Refs<T>) =>
  (value: T): void => {
    for (let i = 0; i < refs.length; i++) {
      const ref = refs[i];

      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        (ref as Mutable<React.RefObject<T>>).current = value;
      }
    }
  };

export { mergeRefs };

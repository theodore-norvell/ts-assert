/** Functions for self checking code.
 *
 * <p>These functions should be used to help ensure that the code base is error free.
 * Assertion failures indicate an internal error in our software and should never be
 * used where the fault is with the user input or some external circumstance beyond
 * our control.
 */
declare module assert {
    /** Code is not written yet.
     *
     * @param message  an optional message to accompany the Error.
     */
    function todo(message?: string): never;
    /** The call is intended should not be reachable.
     *
     * @param message  an optional message to accompany the Error.
     */
    function unreachable(message?: string): never;
    /** Check that an expected condition is true.
     *
     * @param b    a condition that should be true.
     * @param message  an optional message to accompany the Error.
     */
    function check(b: boolean, message?: string): void;
    /** Check that an expected condition is true at the start of a method.
     * This function should be used when the fault is with the code that
     * called the current function.
     *
     * @param b    condition that should be true.
     * @param message  an optional message to accompany the Error.
     */
    function checkPrecondition(b: boolean, message?: string): void;
    /** Report that an expected condition is false at the start of a method.
     * This function should be used when the fault is with the code that
     * called the current function.
     *
     * @param message  an optional message to accompany the Error.
     */
    function failedPrecondition(message?: string): never;
    /** Check that an object invariatn holds.
     *
     * @param b    a condition that should be true.
     * @param message  an optional message to accompany the Error.
     */
    function checkInvariant(b: boolean, message?: string): void;
    /** Check that two things are equal by ===
     *
     * @param expected a thing
     * @param actual  another thing
     */
    function checkEqual<A>(expected: A, actual: A): void;
}
export = assert;

"use strict";
/** Functions for self checking code.
 *
 * <p>These functions should be used to help ensure that the code base is error free.
 * Assertion failures indicate an internal error in our software and should never be
 * used where the fault is with the user input or some external circumstance beyond
 * our control.
 */
var assert;
(function (assert) {
    let doAlert = true;
    if (doAlert)
        try {
            eval('alert');
            doAlert = true;
        }
        catch (e) {
            doAlert = false;
        }
    function raiseTheAlarm(message) {
        const err = new Error(message);
        if (console.error !== undefined && err['stack'] !== undefined) {
            console.error(err['stack']);
        }
        if (doAlert)
            alert(message);
        throw err;
    }
    /** Code is not written yet.
     *
     * @param message  an optional message to accompany the Error.
     */
    function todo(message) {
        if (message === undefined)
            message = "Code not written yet.";
        else
            message = "Code not written yet: " + message;
        return raiseTheAlarm(message);
    }
    assert.todo = todo;
    /** The call is intended should not be reachable.
     *
     * @param message  an optional message to accompany the Error.
     */
    function unreachable(message) {
        if (message === undefined)
            message = "Unreachable code reached.";
        else
            message = "Unreachable code reached: " + message;
        return raiseTheAlarm(message);
    }
    assert.unreachable = unreachable;
    /** Check that an expected condition is true.
     *
     * @param b    a condition that should be true.
     * @param message  an optional message to accompany the Error.
     */
    function check(b, message) {
        if (!b) {
            if (message === undefined)
                message = "Assertion failed";
            else
                message = "Assertion failed: " + message;
            raiseTheAlarm(message);
        }
    }
    assert.check = check;
    /** Check that an expected condition is true at the start of a method.
     * This function should be used when the fault is with the code that
     * called the current function.
     *
     * @param b    condition that should be true.
     * @param message  an optional message to accompany the Error.
     */
    function checkPrecondition(b, message) {
        if (!b) {
            if (message === undefined)
                message = "Precondition failed";
            else
                message = "Precondition failed: " + message;
            raiseTheAlarm(message);
        }
    }
    assert.checkPrecondition = checkPrecondition;
    /** Report that an expected condition is false at the start of a method.
     * This function should be used when the fault is with the code that
     * called the current function.
     *
     * @param message  an optional message to accompany the Error.
     */
    function failedPrecondition(message) {
        if (message === undefined)
            message = "Precondition failed";
        else
            message = "Precondition failed: " + message;
        return raiseTheAlarm(message);
    }
    assert.failedPrecondition = failedPrecondition;
    /** Check that an object invariatn holds.
     *
     * @param b    a condition that should be true.
     * @param message  an optional message to accompany the Error.
     */
    function checkInvariant(b, message) {
        if (!b) {
            if (message === undefined)
                message = "Invariant failed";
            else
                message = "Invariant failed: " + message;
            raiseTheAlarm(message);
        }
    }
    assert.checkInvariant = checkInvariant;
    /** Check that two things are equal by ===
     *
     * @param expected a thing
     * @param actual  another thing
     */
    function checkEqual(expected, actual) {
        if (!(expected === actual)) {
            let message = "Assertion failed:\nExpected ";
            if (expected === undefined)
                message += "undefined";
            else if (expected === null)
                message += "null";
            else
                message += "<<" + expected.toString() + ">>";
            message += "\n but got ";
            if (actual === undefined)
                message += "undefined";
            else if (actual === null)
                message += "null";
            else
                message += "<<" + actual.toString() + ">>";
            raiseTheAlarm(message);
        }
    }
    assert.checkEqual = checkEqual;
})(assert || (assert = {}));
module.exports = assert;
//# sourceMappingURL=assert.js.map
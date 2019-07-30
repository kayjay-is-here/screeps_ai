module.exports = {
  /**
  * Organizes the error thrown by a try-catch block.
  *
  * @type {function}
  *
  * @param {string} The routine where the error took place
  * @param {function} Task to try
  *
  * @return {void}
  */
  attempt: (routine, task) => {
    try {
      task();
    } catch (err) {
    console.log("An error has occured while executing " + routine + ":");
    console.log(err.stack);
    }
  },
  /**
  * @type {function}
  *
  */
  debugger: function() {

  }
};

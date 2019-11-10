  MathJax = {
    tex: {inlineMath: [['$', '$'], ['\\(', '\\)']]},
    chtml: {
      displayAlign: 'left'
    },
    startup: {
      ready: function () {
        //
        //  Do the usual startup (which does a typeset)
        //
        MathJax.startup.defaultReady();
        //
        //  When that is all done, un-hide the page
        //
        MathJax.startup.promise.then(function () {
          document.getElementById("hidden").disabled = true;
        });
      }
    }
  };
  //
  //  Use a closure to hide the local variable
  //
  (function () {
    var n = 1;
    //
    //  Make the current step be visible, and increment the step.
    //  If it is the last step, disable the step button.
    //  Once a step is taken, the reset button is made available.
    //
    window.ShowStep = function () {
      document.getElementById("Step" + n++).style.visibility = "visible";
      if (!document.getElementById("Step" + n)) {
        document.getElementById("step").disabled = true;
      }
      document.getElementById("reset").disabled = false;
    }
    //
    //  Enable the step button and disable the reset button.
    //  Hide the steps.
    //
    window.ResetSteps = function () {
      document.getElementById("step").disabled = false;
      document.getElementById("reset").disabled = true;
      var i = 1, step; n = 1;
      while (step = document.getElementById("Step" + i)) {
        step.style.visibility = "hidden";
        i++
      }
    }
  })();
  
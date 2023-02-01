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
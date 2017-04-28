var toggle = function() {
			var currentDiv = null;
			function open(divElement) {
				divElement.style.height = "35px";
				// divElement.style.display = "flex";
				currentDiv = divElement;
			}
			function close(divElement) {
				divElement.style.height = "0px";
				// divElement.style.display = "none";
				currentDiv = null;
			}
			return function(divID) {
                var divElement = document.getElementById(divID);
                if (divElement) {
                    if (divElement === currentDiv) {
                    	close(currentDiv);
				} else if(currentDiv != null) {
					close(currentDiv);
					open(divElement);
				} else {
					open(divElement);
				}
			}
		}
	}();
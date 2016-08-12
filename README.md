Extrapolate.js
==============

Extrapolate values from a set of evidence. Synthesize values that are not defined.

After the library is included, you could do something like this:

    // create an object for training
    var extrapolate = new EXTRAPOLATE.LINEAR();
    // for this example, ket's keep it simple
    // f(x) = 2x
    extrapolate.given(0).get(0);
    extrapolate.given(1).get(2);
    extrapolate.given(2).get(4);
    extrapolate.given(4).get(8);
    extrapolate.given(5).get(10);
    
    extrapolate.valueFor(-1); // -2
    extrapolate.valueFor(0);  // 0
    extrapolate.valueFor(1);  // 2
    extrapolate.valueFor(6);  // 12


	//create an object for training
	var extrapolatepoly = new EXTRAPOLATE.POLYNOMIAL();
	// f(x) = x^3 + 2x^2 + 5x - 4
	extrapolatepoly.given(0).get(-4);
	extrapolatepoly.given(1).get(0);
	extrapolatepoly.given(2).get(12);
	extrapolatepoly.given(-1).get(-6);

	extrapolatepoly.valueFor(0.5); // -2.625
	extrapolatepoly.valueFor(3); // 38


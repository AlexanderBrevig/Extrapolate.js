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
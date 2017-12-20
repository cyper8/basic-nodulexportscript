Basic Nodulexportscript
-----------------------

If you are happy with existent HTML script tag and just want to use in browser code some particular class or function(s) you wrote for the backend (Node) then this module is for you.

This code just creates ```module``` object with ```exports``` setter, which is able to link **named** function or class, that is being exported, to ```window[class_or_function_name]```.

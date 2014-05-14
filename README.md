maxisix-smacss-boilerplate
=====================

ref: 

http://breakpoint-sass.com/
http://smacss.com/



I use breakpoint for simple organized media queries

Here's some exemples of how it works


Set you're breakpoint with variables.

// assume min-width (by default) if only a number
$high-tide: 500px;

// set min-width/max-width if both values are numbers
$ex-presidents: 600px 800px;

// if one value is a string, assume a feature/value pair
$surfboard-width: max-width 1000px;

// string tests together within parentheses, assume each item is a feature value pair
$surfboard-height: (min-height 1000px) (orientation portrait);




Call you're mixin like this

.reagan {
     @include breakpoint($high-tide) {
       content: 'High tide';
     }
}


Will do

@media (min-width: 500px) {
    .reagan {
    	content: 'High tide';
    }
}




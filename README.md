# Results Component - Angular

I need to learn Angular if I'm to move to the next level at work so this is my first attempt at applying what I've learnt from the tutorials I've been following.

As ever, the difference between coding along with someone and actually doing everything myself, even on a relatively simple component like this, is a big one! NB I have really focused on Angular in this project and not worried too much about, styling or accessability.

I have made a few changes to the component to enable me to use some of the Angular features I need to get the hang off. I added a few extra 'users' to the json data, this means when you click 'continue' the user should change. This addition enabled me to:

* Create a 'service' to inject this data, and consolidate related manipulations
* Pass data into the results component using an @Input()
* Emit the user and pass into the summary component using @Output()
* Render the results using a @for directive
* Render the total score and associated text using an @if directive
* Create a 'User' inferface which I could then use in multiple places to check types

## Things to focus on in the future:

* Increase fluency passing data between components
* Improve understanding of Typescript, especially with regard to classes
* Revise JS classes, with focus on the role of the constructor

export default function ( nextState, callback ){
    require.ensure([], (require)=> {
        callback(null, require('pages/activity/questionnaire/index').default );
    }, "questionnaire");
}
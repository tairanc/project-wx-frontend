export default ( nextState, callback )=> {
	require.ensure([], (require) => {
    require('plugin/zepto.fly.min.js');
		callback(null, require('pages/activity/minusActivity').default);
	}, "minusActivity");
}
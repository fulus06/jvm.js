jjvm.runtime.ThreadPool = {
	threads: [],
	
	reap: function() {
		for(var i = 0; i < jjvm.runtime.ThreadPool.threads.length; i++) {
			if(jjvm.runtime.ThreadPool.threads[i].getStatus() == jjvm.runtime.Thread.STATUS.TERMINATED) {
				jjvm.runtime.ThreadPool.threads.splice(i, 1);
			}
		}

		jjvm.core.NotificationCentre.dispatch(this, "onThreadGC", [jjvm.runtime.ThreadPool.getData()]);
	},

	getData: function() {
		var threads  = [];

		_.each(jjvm.runtime.ThreadPool.threads, function(thread) {
			threads.push(thread.getData());
		});

		return threads;
	}
};

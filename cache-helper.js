var cacheHelper = {};

cacheHelper.deleteCacheAndReload = function() {

    const cacheNamePrefix = 'offline-cache-';
    const cacheKeys = await caches.keys();
    await Promise.all(cacheKeys
        .filter(key => key.startsWith(cacheNamePrefix))
        .map(key => caches.delete(key)));
}

cacheHelper.reload = function() {

    window.location.reload();
}

cacheHelper.ShowAlert = function (message) {
    alert(message);
}
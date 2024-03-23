// This is a JavaScript module that is loaded on demand. It can export any number of
// functions, and may import other JavaScript modules if required.

let notify;


export function showPrompt(message) {
    return prompt(message, 'Type anything here');
}

export function isDevice() {
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(navigator.userAgent);
}

export async function forceDeleteCache() {

    var cacheNamePrefix = 'offline-cache-';
    var cacheKeys = await caches.keys();
    await Promise.all(cacheKeys
        .filter(key => key.startsWith(cacheNamePrefix))
        .map(key => caches.delete(key)));
}

export async function forceReload() {
    await window.location.reload();
}

export function initializeConnectivity(interop) {

    notify = function () {
        interop.invokeMethodAsync("ConnectivityChanged", navigator.onLine);
    }

    window.addEventListener("online", notify);
    window.addEventListener("offline", notify);

    notify(navigator.onLine);
}

export function disposeConnectivity() {
  
    if (handler != null) {

        window.removeEventListener("online", notify);
        window.removeEventListener("offline", notify);
    }
}

window.connectivity = {
    initialize: function (interop) {

        notify = function () {
            interop.invokeMethodAsync("ConnectivityChanged", navigator.onLine);
        }

        window.addEventListener("online", notify);
        window.addEventListener("offline", notify);

        notify(navigator.onLine);
    },
    dispose: function () {

        if (handler != null) {

            window.removeEventListener("online", notify);
            window.removeEventListener("offline", notify);
        }
    }
};

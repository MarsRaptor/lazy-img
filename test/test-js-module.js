import lazy_img from './../lazy-img.module.js'
lazy_img.init(
    {
        lazy_src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABaBAMAAADN6EBhAAAAG1BMVEUAAAD///9fX1+fn5/f39+/v78/Pz9/f38fHx+7aoa+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACW0lEQVRYw+2XPW/bMBCGFcm2OPZqUvZooQG62oGBejRT9GMMg6JZFbhFVwtogYxUE6T92b0jKVvyYOirQwu+gwkb8CPy3jveKQi8vLy8vLz+Ib2S/BYXBgsG+/LHYtaZdwmo9+eA4bYNLwajxRngqhUwh2vNLmFOwMrPnYEMpuY/YihgBEtaRqAHAl6ANnG/02UMf0n+YIFP9hE5AH5ha3irGwDvxfHwBkgm8YyATCbBEYif0CSV0tkJMOXZT/mRgE+QHY8cw+fg6zEJzpj8sg5kcGPOW8wmboMWWNBJ1LwBMKkDQ9pWxBH4pdygAa6IVUzb7zAC57KApOqyxI0HY94+hmNnUgEgqkCTXeXTmrh85dJmdAC+O+RlK+DI5SEsT3bIf6PXHYARuUrcrBLDEDQanYouMXS1rISLYXxwGZ+16OAyVsAHzb6jpad5iJUyP83DpNHtUL8PU4GVsjW1XJ45T1jzSrFFWrmxTS1rAxy7M99TWJrWMoJ+1HvKoxR7e9swsGcOJQIna4yNb8Bef1v1NlrN/Bce+H8BHyXf0Jed5He0Tj7xhz5AM33u3a1LPWqFl+OqBzAX2UTRZDTVz2pK4A3LoTvQNJQxjYpLaoS2K8U9gBE1aaSFtFJDzenKlt2BdmxQWzfN60Dd9HP5ws7bBHh+rRAoaV5IBwCGimzWdgAZAqhAvPk2wA7LGMawcTHc9oth6fKIhiJMH+uy6p2HmQGmCKSJJoT+lUIFsgOcw3Ci6VUpZS0zicstXRY40fBet83OvEbR29SVsXiy5puuLnt5eXl5ebXSH4wag2cWRt4sAAAAAElFTkSuQmCC",
        loading_src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABaBAMAAADN6EBhAAAAG1BMVEUAAAD////f398fHx+fn59/f3+/v78/Pz9fX18IpkIwAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABmklEQVRYhe2UQU+DQBBGJ922cOxAbT2WWPVKmxivQg9eoU30KkajV2PSeBQP/m6/3QUNjbbQcNA4LynDLsxLmdldIkEQBEEQBEEQNB1vy8N0QIqT/yZszB8SqpinIaIT84kum3PrrWwNFT8v+Z7s3GI2rilMmfkAMUL0QhO9qBDmmDsqnqU1hT1+oDU62uOFWvMFdRFTLoS8UtnQvIO5msLZCJfMpxkSKRiY2CuFcHSYzJxbVxj5ZDJyHfGpqW/FRnij5aGdy2oKAyRRvxggM9PjsimJFZp38ppClI1QOFzUyxX7FOhx/iV0ITTvPDUVvqOTEPJ3wmQPYZ/57jpt4R+WNUyHoa3hhCo1dJvWsOxyoEVYPrajVWHUpMt2HY6N0EUN9djlqlCvQ2fnOmRDWO6UaBieR0iyu6Iq7PIl5nzcJ5+/H4XlXp4jjPJDs7e9jRra/V1XiFPmGDlqydPXjv622FtsdJlcnDb5DmFj9jkjt7qySXtCXVrHrO6WmONcfNOHb1s4un2n7fmIzjLvsU2fIAiCIAjCL+UDejtRXcCbC4cAAAAASUVORK5CYII="
    },
    {
        load_on_event:"click"
    }
)
function force() {
    lazy_img.forceLoad();
}
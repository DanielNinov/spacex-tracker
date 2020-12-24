export const SPACEX_API = 'https://api.spacexdata.com/v4';
export const PAST_BODY = JSON.stringify({
    "query": {
        "upcoming": false
    },
    "options": {
        "sort": {
            "date_utc": "desc"
        },
        "select": {
            "name": 1,
            "links": {
                "patch": {
                    "small": 1
                },
                "reddit": {
                    "campaign": 1
                },
                "flickr": {
                    "original": 1
                },
                "youtube_id": 1
            },
            "success": 1,
            "details": 1,
            "rocket": 1,
            "date_utc": 1
        },
        "populate": [
            {
                "path": "rocket",
                "select": {
                    "name": 1
                }
            }
        ]
    }
});
export const SPACEX_API = "https://api.spacexdata.com/v4";
export const NO_PATCH = "https://icon-library.com/images/rocket-png-icon/rocket-png-icon-1.jpg";
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
            "date_utc": 1,
            "date_precision": 1
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
export const UPCOMING_BODY = JSON.stringify({
    "query": {
        "upcoming": true
    },
    "options": {
        "limit": 20,
        "sort": {
            "flight_number": "asc"
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
            "date_utc": 1,
            "date_precision": 1
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
export const LINKEDIN_URL = "https://www.linkedin.com/in/danielninov/";
export const GITHUB_URL = "https://github.com/DanielNinov/spacex-tracker/";
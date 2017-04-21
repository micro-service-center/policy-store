```
   __                   __                           __    _                                   __                      
  / /_  ____   ____    / /           ____   ____    / /   (_)  _____   __  __          _____  / /_  ____    _____  ___
 / __/ / __ \ / __ \  / /  ______   / __ \ / __ \  / /   / /  / ___/  / / / / ______  / ___/ / __/ / __ \  / ___/ / _ \
/ /_  / /_/ // /_/ / / /  /_____/  / /_/ // /_/ / / /   / /  / /__   / /_/ / /_____/ (__  ) / /_  / /_/ / / /    /  __/
\__/  \____/ \____/ /_/           / .___/ \____/ /_/   /_/   \___/   \__, /         /____/  \__/  \____/ /_/     \___/
                                 /_/                                /____/                                             
```
# Tool Policy Store
This is the __Policy__ Storage for the Tool Project. All Policies should be stored in this repo.

### Rules
- The name of the file __must__ be `<policy_name>`_policy.
- Names should not duplicate with other policies.
- Upon creating a __new policy__, corresponding __error configuration__ should be added to `error.json`.

### The Policy File
```javascript
const BasePolicy = require('tool-policy').Policy // <- Always Extends Base Policy Class

/** Class for User Policy */
class PathPolicy extends BasePolicy {

	/**
	 * Checks if the Request Contains a Valid Path
	 * @param {Object} Request Validator
	 * @return {Boolean}
	 */
	static _approve(requestValidator) { // <- Always rewrite the _approve method, or an Unimplemented Error will be Triggered
		return requestValidator.paths.indexOf(requestValidator.pathRoot) > -1 // <- Always return true or false
	}

}

module.exports = PathPolicy
```

### The Error Config
```javascript
{
	"errors":{
		"path_policy_error": {  								// error name should always be <name>_policy_error
			"policy": "path_policy", 							// policy name
			"log_path":"validator",								// place to log the error
			"log_root":"",										// place of the root of the log
			"http_status": 401,									// http_status if needed
			"code": "0001",										// error code
			"msg": "request path did not match any services",	// error message for backend debugger
			"emitter": "request"								// source of the error
		},
		"header_policy_error": {
			"policy": "header_policy",
			"log_path":"validator",
			"log_root":"",
			"http_status": 401,
			"code": "0002",
			"msg": "request header did not contain credential",
			"emitter": "request"
		}
	}
}

```

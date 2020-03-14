var express = require('express');
var router = express.Router();
var axios = require('axios')

var slack_url = 'https://hooks.slack.com/services/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';
var payload_slack = {username: 'APPrise Mobile Slack Notification', text: 'Slack Notification Test Axios'};
/* GET slack notification listing. */
router.get('/', function(req, res, next) {
  axios({
    method: 'post',
    url: slack_url,
    data: payload_slack
  });
});

module.exports = router;

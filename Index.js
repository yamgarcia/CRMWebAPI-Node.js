var CRMWebAPI = require("CRMWebAPI");

var apiconfig = {
  APIUrl: "https://org0d618e36.crm.dynamics.com/api/data/v9.0/",
  AccessToken:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL29yZzBkNjE4ZTM2LmFwaS5jcm0uZHluYW1pY3MuY29tLyIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzFjNjExMGM5LWQ3Y2QtNDc4Yy04MzExLTJhZjU1Mjg0YzhlOS8iLCJpYXQiOjE2NjA3NzM1NjQsIm5iZiI6MTY2MDc3MzU2NCwiZXhwIjoxNjYwNzc4OTY0LCJhY3IiOiIxIiwiYWlvIjoiRTJaZ1lMamhaNnBVN1NDU3FYYTRTS2xkTjdELzRhTUxnck5FR3gvYTJiemorLzg2N3d3QSIsImFtciI6WyJwd2QiLCJyc2EiXSwiYXBwaWQiOiJlYzFhYTdhZC1kYWVjLTQ4ZWYtODUzOC1hZDI3ZmNkMzcwMjgiLCJhcHBpZGFjciI6IjEiLCJkZXZpY2VpZCI6IjcxOGM5OWFiLWM4NzAtNGI4MC04NDgzLWUwMDU5ODExYjk2YSIsImZhbWlseV9uYW1lIjoiQWRtaW5pc3RyYXRvciIsImdpdmVuX25hbWUiOiJTeXN0ZW0iLCJpcGFkZHIiOiIxNjguMTQ5LjEzMC4xOTkiLCJuYW1lIjoiU3lzdGVtIEFkbWluaXN0cmF0b3IiLCJvaWQiOiI4NDBmOTAyMS04ZTMyLTRjYTItYTk4Mi1kNTMwY2I0MDg5NzciLCJwdWlkIjoiMTAwMzIwMDIwREUzMDNDNSIsInJoIjoiMC5BWFVBeVJCaEhNM1hqRWVERVNyMVVvVEk2UWNBQUFBQUFBQUF3QUFBQUFBQUFBQjFBR0EuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiRHY3V2dHalFselh3RENDUkhqQUUzVUlOR1F4NUxyZjhIaFJ3aTNZbURLayIsInRpZCI6IjFjNjExMGM5LWQ3Y2QtNDc4Yy04MzExLTJhZjU1Mjg0YzhlOSIsInVuaXF1ZV9uYW1lIjoiYWRtaW5AQ1JNNzYwMzAyLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbWluQENSTTc2MDMwMi5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJhT1ZtVHlUMHZrbTFick9YQXk0U0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.Ht0SWa6pESXu-KTvTUOJ4SpHsX9IjXgq7SH55WLaseue4cVhOKn7aLXiovqCNNaqzFoC5jond5aXIIPeiro7VBjrwCj-HKGET66gj5vm__A3xxS4oUKr3JqsRM2kCKZjTt0rup3IMjzBK_NHPspcINlp-WENug8AMHNNC7HFxcyAbAF0Jer1WhiTm1IlYVs1hfXrIs0RScHwEAyTR-H08wm-5JdBqYnYd_p_1imbSH3pRq2jn1xv7g-Ig_u64zjTHpHdWjQBxCSVno5mQJOh2EnQjEZ7klFwc0bKlNPbP7wprC3zeM07VsTdC7V-NF9TNiDwD7cnTBACW6h_BMzPQg",
};
var api = new CRMWebAPI(apiconfig);

// api.ExecuteFunction('WhoAmI').then(
//     function(result) {
//         console.log(result);
//     },function(error) {
//         console.log(error)
//     }
// );

var account = { name: "Test Account 111" };

var accountID = null;

api.Create("accounts", account).then(
  function (result) {
    accountID = result;
    console.log(result);

    api.Get("accounts", accountID).then(
      function (result) {
        accountID = result;
        console.log("Account data " + JSON.stringify(result));

        //Account update
        var updateAccount = { name: "Updated Name " };
        api.Update("accounts", accountID, updateAccount).then(
          function (result) {
            console.log("Update Result " + JSON.stringify(result));

            //Account Record delete
            api.Delete('accounts',accountID).then(
                function(result) {
                    console.log(result);
                },function(error) {
                    console.log(error)
                }
            );
          },
          function (error) {
            console.log(error);
          }
        );
      },
      function (error) {
        console.log(error);
      }
    );
  },
  function (error) {
    console.log(error);
  }
);

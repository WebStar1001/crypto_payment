<?php

namespace Database\Seeders;

use App\Models\Core\Page;
use Illuminate\Database\Seeder;

class UpdatePagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Page::where('slug', 'api')->delete();

        $date = now();

        $pages = [
            [
                'slug' => 'public-api',
                'title' => 'Public API',
                'body' => '<section class="cmb_section" data-cmb-wrapper="cmb_section" data-cmb-id="5" data-cmb-element-type="static-layout"><div class="section-overlay"><div class="cmb_container container" data-cmb-wrapper="cmb_container" data-cmb-id="1"><div class="cmb_row row" data-cmb-wrapper="cmb_row" data-cmb-id="2"><div class="cmb_column col-sm-12" data-cmb-wrapper="cmb_column" data-cmb-id="3"><div class="cmb_editable_text" data-cmb-wrapper="cmb_editable_text" data-cmb-id="4"><div class="cmb-editable-text"><div class="cmb-editable-text-container"><div class="my-4">
<h2>Public API</h2>
<p>Trademen provides HTTP APIs for interacting with the exchange only for public market data.</p>
<ul class="list-group mb-3 pl-0">
<li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/public-api#returnTicker">- returnTicker</a></li>
<li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/public-api#returnOrderBook">- returnOrderBook</a></li>
<li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/public-api#returnTradeHistory">- returnTradeHistory</a></li>
<li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/public-api#returnChartData">- returnChartData</a></li>
</ul>
<p> </p>
<p> </p>
<p>The HTTP API allows read access to public market data through the public endpoint -</p>
<p>Public HTTP Endpoint:<a class="text-info">https://yourdomain.com/api/public</a></p>
<div id="returnTicker">
<h4 class="py-3"> </h4>
<h4 class="py-3">returnTicker</h4>
<p>Retrieves summary information for each currency/coin pair listed on the exchange.</p>
<p>Ticker Endpoint:<a class="text-info">https://yourdomain.com/api/public?command=returnTicker</a></p>
<table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color">
<tbody>
<tr>
<td class="w-25"><strong>Field</strong></td>
<td class="strong"><strong>Description</strong></td>
</tr>
<tr>
<td>last</td>
<td>Execution price for the most recent trade for this pair.</td>
</tr>
<tr>
<td>change</td>
<td>Price change percentage.</td>
</tr>
<tr>
<td>high24hr</td>
<td>The highest execution price for this pair within thec last 24 hours.</td>
</tr>
<tr>
<td>low24hr</td>
<td>The lowest execution price for this pair within the last 24 hours.</td>
</tr>
<tr>
<td>baseVolume</td>
<td>Base units traded in the last 24 hours.</td>
</tr>
<tr>
<td>tradeVolume</td>
<td>trade units traded in the last 24 hours.</td>
</tr>
</tbody>
</table>
<h5> </h5>
<h5> </h5>
<h5> </h5>
<h5> </h5>
<h5>Example:</h5>
<div class="card my-2 mb-3 lf-toggle-bg-card">
<div class="card-body">
<pre class="text-green">    {
        "BTC_USD": {
            "last": "8180.000000000",
            "low24hr": "8183.00000000",
            "high24hr": "10369.00000000",
            "change": "5.99",
            "tradeVolume": "614.24470018",
            "baseVolume": "5694762.62500284"
        },
        "DOGE_BTC": {
            "last": "0.000000200",
            "low24hr": "0.000000190",
            "high24hr": "0.000000210",
            "change": "10.58",
            "tradeVolume": "1614.24470018",
            "baseVolume": "4694762.62500284"
        }
    }
</pre>
</div>
</div>
<p> </p>
<p> </p>
<p>Retrieving summary information for a specified currency/coin pair listed on the exchange -</p>
<p> </p>
<table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color">
<tbody>
<tr>
<td class="w-25"><strong>Request Parameter</strong></td>
<td class="strong"><strong>Description</strong></td>
</tr>
<tr>
<td>tradePair</td>
<td>A pair like BTC_USD</td>
</tr>
</tbody>
</table>
<p> </p>
<p>Ticker Endpoint:<a class="text-info">https://yourdomain.com/api/public?command=returnTicker&amp;tradePair=BTC_USD</a></p>
<p> </p>
<p> </p>
<h5> </h5>
<h5> </h5>
<h5>Example:</h5>
<div class="card my-2 mb-3 lf-toggle-bg-card">
<div class="card-body">
<pre class="text-green">    {
        "last": "8180.000000000",
        "low24hr": "8183.00000000",
        "high24hr": "10369.00000000",
        "change": "5.99",
        "tradeVolume": "614.24470018",
        "baseVolume": "5694762.62500284"
    }
</pre>
</div>
</div>
<div id="returnOrderBook">
<h4 class="py-3"> </h4>
<h4 class="py-3">returnOrderBook</h4>
<p>Retrieves the latest 50 order book of each order type information for a specified currency/coin pair listed on the exchange</p>
<p>Order book Endpoint:<a href="https://yourdomain.com/public?command=returnOrderBook&amp;tradePair=BTC_USD">https://yourdomain.com/public?command=returnOrderBook&amp;tradePair=BTC_USD</a></p>
<p> </p>
<h5> </h5>
<h5>Input Fields:</h5>
<table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color">
<tbody>
<tr>
<td>tradePair</td>
<td>A pair like BTC_ETH</td>
</tr>
</tbody>
</table>
<h5> </h5>
<h5> </h5>
<h5>Out Fields:</h5>
<table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color">
<tbody>
<tr>
<td class="w-25"><strong>Field</strong></td>
<td class="strong"><strong>Description</strong></td>
</tr>
<tr>
<td>asks</td>
<td>An array of price aggregated offers in the book ordered from low to high price.</td>
</tr>
<tr>
<td>bids</td>
<td>An array of price aggregated bids in the book ordered from high to low price.</td>
</tr>
</tbody>
</table>
<h5> </h5>
<h5> </h5>
<h5>Example:</h5>
<div class="card my-2 mb-3 lf-toggle-bg-card">
<div class="card-body">
<pre class="text-green">    {
      "asks": [
        {
          "price": "0.09000000",
          "amount": "500.00000000",
          "total": "45.00000000"
        },
        {
          "price": "0.11000000",
          "amount": "700.00000000",
          "total": "77.00000000"
        }
        ...
      ],
      "bids": [
        {
          "price": "0.10000000",
          "amount": "700.00000000",
          "total": "70.00000000"
        },
        {
          "price": "0.09000000",
          "amount": "500.00000000",
          "total": "45.00000000"
        }
        ...
      ]
    }
</pre>
</div>
</div>
</div>
</div>
<div id="returnTradeHistory">
<h4 class="py-3"> </h4>
<h4 class="py-3">returnTradeHistory</h4>
<p>Returns the past 100 trades for a given market, You may set a range specified in UNIX timestamps by the “start” and “end” GET parameters.</p>
<p>Trade History Endpoint:<a class="text-info">https://yourdomain.com/public?command=returnTradeHistory&amp;tradePair=BTC_USD</a></p>
<p>Trade History Endpoint:<a class="text-info">https://yourdomain.com/public?command=returnTradeHistory&amp;tradePair=BTC_USD&amp;start=1593419220&amp;end=1593423660</a></p>
<h5> </h5>
<h5> </h5>
<h5> </h5>
<h5>Input Fields:</h5>
<table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color">
<tbody>
<tr>
<td class="w-25"><strong>Request Parameter</strong></td>
<td class="strong"><strong>Description</strong></td>
</tr>
<tr>
<td>tradePair</td>
<td>A pair like BTC_ETH</td>
</tr>
<tr>
<td>start (optional)</td>
<td>The start of the window in seconds since the unix epoch.</td>
</tr>
<tr>
<td>end (optional)</td>
<td>The end of the window in seconds since the unix epoch.</td>
</tr>
</tbody>
</table>
<h5> </h5>
<h5> </h5>
<h5> </h5>
<h5>Out Fields:</h5>
<table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color">
<tbody>
<tr>
<td class="w-25"><strong>Field</strong></td>
<td class="strong"><strong>Description</strong></td>
</tr>
<tr>
<td>date</td>
<td>The UTC date and time of the trade execution.</td>
</tr>
<tr>
<td>type</td>
<td>Designates this trade as a buy or a sell from the side of the taker.</td>
</tr>
<tr>
<td>price</td>
<td>The price in base currency for this asset.</td>
</tr>
<tr>
<td>amount</td>
<td>The number of units transacted in this trade.</td>
</tr>
<tr>
<td>total</td>
<td>The total price in base units for this trade.</td>
</tr>
</tbody>
</table>
<h5> </h5>
<h5> </h5>
<h5> </h5>
<h5>Example:</h5>
<div class="card my-2 mb-3 lf-toggle-bg-card">
<div class="card-body">
<pre class="text-green">    [
      {
        "price": "9860.86031280",
        "amount": "0.85441089",
        "total": "8425.22643602",
        "type": "buy",
        "date": "2020-06-29 10:03:00"
      },
      {
        "price": "9862.25325181",
        "amount": "0.15549235",
        "total": "1533.50493441",
        "type": "sell",
        "date": "2020-06-29 10:02:00"
      },
      ...
    ]
</pre>
</div>
</div>
</div>
<div id="returnChartData">
<h4 class="py-3"> </h4>
<h4 class="py-3">returnChartData</h4>
<p>Returns candlestick chart data. Required GET parameters are tradePair, (candlestick period in seconds; valid values are 300, 900, 1800, 7200, 14400, and 86400), start, and end. Start and end are given in UNIX timestamp format and used to specify the date range for the data returned. Fields include:</p>
<p>Chart Data Endpoint:<a class="text-info">https://yourdomain.com/public?command=returnChartData&amp;tradePair=BTC_USD&amp;interval=900&amp;start=1546300800&amp;end=1546646400</a></p>
<h5> </h5>
<h5>Input Fields:</h5>
<table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color">
<tbody>
<tr>
<td class="w-25"><strong>Request Parameter</strong></td>
<td class="strong"><strong>Description</strong></td>
</tr>
<tr>
<td>tradePair</td>
<td>The currency pair of the market being requested.</td>
</tr>
<tr>
<td>interval</td>
<td>Candlestick period/interval in seconds. Valid values are 300, 900, 1800, 7200, 14400, and 86400.</td>
</tr>
<tr>
<td>start</td>
<td>The start of the window in seconds since the unix epoch.</td>
</tr>
<tr>
<td>end</td>
<td>The end of the window in seconds since the unix epoch.</td>
</tr>
</tbody>
</table>
<h5> </h5>
<h5> </h5>
<h5> </h5>
<h5>Out Fields:</h5>
<table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color">
<tbody>
<tr>
<td class="w-25"><strong>Field</strong></td>
<td class="strong"><strong>Description</strong></td>
</tr>
<tr>
<td>date</td>
<td>The UTC date for this candle in miliseconds since the Unix epoch.</td>
</tr>
<tr>
<td>high</td>
<td>The highest price for this asset within this candle.</td>
</tr>
<tr>
<td>low</td>
<td>The lowest price for this asset within this candle.</td>
</tr>
<tr>
<td>open</td>
<td>The price for this asset at the start of the candle.</td>
</tr>
<tr>
<td>close</td>
<td>The price for this asset at the end of the candle.</td>
</tr>
<tr>
<td>volume</td>
<td>The total amount of this asset transacted within this candle.</td>
</tr>
</tbody>
</table>
<h5> </h5>
<h5> </h5>
<h5> </h5>
<h5>Example:</h5>
<div class="card my-2 mb-3 lf-toggle-bg-card">
<div class="card-body">
<pre class="text-green">    [
      {
        "date": 1593396900,
        "low": "10112.27439575",
        "high": "10115.44996344",
        "volume": "1.54063724",
        "open": "10115.44996344",
        "close": "10112.27439575"
      },
      {
        "date": 1593397800,
        "low": "10061.35948383",
        "high": "10112.27439575",
        "volume": "6.88096652",
        "open": "10112.27439575",
        "close": "10061.35948383"
      },
      ...
    ]
</pre>
</div>
</div>
</div>
</div></div></div></div></div></div></div></div></section>',
                'published_at' => '2020-11-03 07:09:21',
                'settings' => '{
                    "top_nav": "0",
                    "side_nav": "0",
                    "side_nav_fixed": "0",
                    "hide_breadcrumb": "1",
                    "navigation_type": "2",
                    "top_nav_transparent": "0",
                    "logo_inversed_top_nav": "0",
                    "logo_inversed_side_nav": "0"
                }',
                'is_home_page' => INACTIVE,
                'created_at' => $date,
                'updated_at' => $date,
            ],
            [
                'slug' => 'private-api',
                'title' => 'Private API',
                'body' => '<section class="cmb_section" data-cmb-wrapper="cmb_section" data-cmb-id="5" data-cmb-element-type="static-layout"><div class="section-overlay"><div class="cmb_container container" data-cmb-wrapper="cmb_container" data-cmb-id="1"><div class="cmb_row row" data-cmb-wrapper="cmb_row" data-cmb-id="2"><div class="cmb_column col-sm-12" data-cmb-wrapper="cmb_column" data-cmb-id="3"><div class="cmb_editable_text" data-cmb-wrapper="cmb_editable_text" data-cmb-id="4"><div class="cmb-editable-text"><div class="cmb-editable-text-container"><div class="my-4 py-4"> <h2>Private API</h2> <p>Trademen also provides private HTTP APIs which allow read / write access to your private account using personal access token for following functionalities…</p> <ul class="list-group mb-3 pl-0"> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#register">- Register</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#login">- Login</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#getForgetPasswordLink">- Get Forget Password Link/Code</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#setNewPassword">- Set New Password</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#getEmailVerificationCode">- Get Email Verification Link / Code</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#verifyEmailVerificationCode">- Verify Email Verification Code</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#getUserProfile">- Get User Profile</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#updateUserProfile">- Update User Profile</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#changeUserAvatar">- Change User Avatar</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#changePassword">- Change Password</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#getProfilePreference">- Get Profile Preference</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#updateProfilePreference">- Update Profile Preference</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#kycVerification">- KYC Verification</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#getTickets">- Get Support Tickets</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#getTicketDetail">- Get Ticket Detail</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#storeTicket">- Submit a Ticket</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#commentOnTicket">- Comment on Ticket</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#closeTicket">- Close a Ticket</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#downloadCommentAttachment">- Download Comment Attachment</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#getWallets">- Get Wallets</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#depositList">- Deposit List</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#getSystemAavailablePayment">- Get System\'s Aavailable Payment Methods</a></li><li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#getUserBankAccounts">- Get user\'s Bank Accounts</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#depositFiatCurrency">- Deposit Fiat Currency</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#uploadFiatDepositReceiptForAdminReview">- Upload Fiat Deposit Receipt for Admin Review</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#depositCryptocurrency">- Deposit Cryptocurrency</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#getOrderList">- Get Order List</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#getOpenOrderList">- Get Open Order List</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#placeOrder">- Place Order</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#cancelOrder">- Cancel Order</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#getTradeHistory">- Get Trade History</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#getWithdrawalList">- Get Withdrawal List</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#withdrawWalletBalance">- Withdraw Wallet Balance</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#cancelBankWithdrawalRequest">- Cancel Bank Withdrawal Request</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#getReferralLink">- Get Referral link </a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#getReferralEarnings">- Get Referral Earnings </a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#getReferralUsers">- Get Referral Users</a></li> <li class="list-group-item lf-toggle-bg-card"><a class="text-info" href="/private-api#getReferralEarningsThroughUser">- Get Referral Earnings through User</a></li> </ul> <div id="register"> <h4 class="py-3"> </h4> <h4 class="py-3">Register</h4> <p>Register a new user. Required POST method and request post data are "first_name", "last_name", "email", "username", "password", "password_confirmation", "check_agreement". If successful, the method will return user profile detail and personal access token.</p> <p>Register Endpoint: <a class="text-info">https://yourdomain.com/api/register</a></p> <table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color"> <tbody> <tr> <td class="w-25 text-uppercase"><strong>Field</strong></td> <td class="strong text-uppercase"><strong>Description</strong></td> </tr> <tr> <td>first_name</td> <td><span class="text-warning">Required</span> - Set user\'s first name</td></tr><tr><td>last_name</td><td><span class="text-warning">Required</span> - Set user\'s last name</td> </tr> <tr> <td>email</td> <td><span class="text-warning">Required</span> - Set user\'s email</td></tr><tr><td>username</td><td><span class="text-warning">Required</span> - Set user\'s username</td> </tr> <tr> <td>password</td> <td><span class="text-warning">Required</span> - Set user\'s password</td></tr><tr><td>password_confirmation</td><td><span class="text-warning">Required</span> - Confirm user\'s password</td> </tr> <tr> <td>check_agreement</td> <td><span class="text-warning">Required</span> - Check registration\'s terms and policy</td></tr></tbody></table><h5>Sample Register Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X POST https://yourdomain.com/api/register \
    -H "Content-Type: application/json" \
    -d \'{
      "first_name": "Jhon",
      "last_name": "Doe",
      "email": "jhondoe@gmail.com",
      "username": "jhondoe",
      "password": "123456789",
      "password_confirmation": "123456789",
      "check_agreement": 1
    }\'

    </pre>
</div></div><h5>Sample Register Successful Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "The registration was successful. Please check your email to verify your account.",
        "data": {
            "user": {
                "email": "jhondoe@gmail.com",
                "username": "jhondoe",
                "referral_code": "fcdd3595-6ebe-4668-a65b-6444344eae1a",
                "assigned_role": "user",
                "id": "c0add1c9-bede-4224-ab5c-adcf79b0cb66",
                "updated_at": "2020-11-12T09:13:38.000000Z",
                "created_at": "2020-11-12T09:13:38.000000Z",
                "profile": {
                    "id": "d2354e68-858c-4353-96ed-84cb22fa5af2",
                    "user_id": "c0add1c9-bede-4224-ab5c-adcf79b0cb66",
                    "first_name": "Jhon",
                    "last_name": "Doe",
                    "address": null,
                    "phone": null,
                    "created_at": "2020-11-12T09:13:38.000000Z",
                    "updated_at": "2020-11-12T09:13:38.000000Z"
                }
            },
            "access_token": "1|5mao11TRVlzCqF3JVAlPAw7aEJWfKUd2UjVjcqfC"
        }
    }

</pre>
</div></div><h5>Sample Register Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body"><pre class="text-warning">    {"success": false,"message": "Failed to register."}</pre></div></div></div><div id="login"><h4 class="py-3"> </h4><h4 class="py-3">Login</h4><p>Sends user\'s login request. Required POST method and request post data are "username", "password". If successful, the method will return personal access token.</p> <p>Login Endpoint: <a class="text-info">https://yourdomain.com/api/login</a></p> <table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color"> <tbody> <tr> <td class="w-25 text-uppercase"><strong>Field</strong></td> <td class="strong text-uppercase"><strong>Description</strong></td> </tr> <tr> <td>username</td> <td><span class="text-warning">Required</span> - Set user\'s username</td></tr><tr><td>password</td><td><span class="text-warning">Required</span> - Set user\'s password</td> </tr> </tbody> </table> <h5>Sample Login Request:</h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-info">    curl -v -X POST https://yourdomain.com/api/login \
    -H "Content-Type: application/json" \
    -d \'{
        "email": "jhondoe@gmail.com",
      "username": "jhondoe",
      "password": "123456789"
    }\'

</pre>
</div> </div> <h5>Sample Login Successful Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "Login is successful.",
        "data": {
            "access_token": "2|qL8HUXM4uz0hLS0GHjGeB1bsAQPDmUSfOzDFQu83"
        }
    }
</pre>
</div> </div> <h5>Sample Login Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
        "success": false,
        "message": "Failed to login."
    }
</pre>
</div> </div> </div> <div id="getForgetPasswordLink"> <h4 class="py-3"> </h4> <h4 class="py-3">Get Forget Password Link / Code</h4> <p>Sends request for restore user\'s forgotten password. Required POST method and request post data are "email". If successful, the method will return verifier hash code.</p><p>Get Forget Password Link/Code Endpoint: <a class="text-info">https://yourdomain.com/api/forget-password</a></p> <table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color"> <tbody> <tr> <td class="w-25 text-uppercase"><strong>Field</strong></td> <td class="strong text-uppercase"><strong>Description</strong></td> </tr> <tr> <td>email</td> <td><span class="text-warning">Required</span> - Set user\'s email</td> </tr> </tbody> </table> <h5>Sample Get Forget Password Link/Code Request:</h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-info">    curl -v -X POST https://yourdomain.com/api/forget-password \
    -H "Content-Type: application/json" \
    -d \'{
        "email": "jhondoe@gmail.com"
    }\'

</pre>
</div></div><h5>Sample Get Forget Password Link/Code Successful Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "Password reset link is sent to your email address.",
        "data": {
            "verifier_hash_code": "$2y$10$UoxFJl4pD3/GWNR6x0z2KepfhalTaW.xuUcDgUv0r0cR3XZj/RaNK"
        }
    }
</pre>
</div></div><h5>Sample Login Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": false,
        "message": "Failed! Your account is deleted by admin."
    }
</pre>
</div></div></div><div id="setNewPassword"><h4 class="py-3"> </h4><h4 class="py-3">Set New Password</h4><p>Sends request for set new password. Required POST method and request post data are "new_password", "password_confirmation", "verification_code", "email", "verifier_hash_code". If successful, the method will return verifier hash code.</p><p>Set New Password Endpoint: <a class="text-info">https://yourdomain.com/api/forget-password/set-password</a></p> <table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color"> <tbody> <tr> <td class="w-25 text-uppercase"><strong>Field</strong></td> <td class="strong text-uppercase"><strong>Description</strong></td> </tr> <tr> <td>new_password</td> <td><span class="text-warning">Required</span> - Set user\'s new password</td> </tr> <tr> <td>password_confirmation</td> <td><span class="text-warning">Required</span> - Confirm user\'s password</td> </tr> <tr> <td>verification_code</td> <td><span class="text-warning">Required</span> - The Verification code given by user which was sent to user\'s registered email</td> </tr> <tr> <td>email</td> <td><span class="text-warning">Required</span> - Set user\'s registered email</td> </tr> <tr> <td>verifier_hash_code</td> <td><span class="text-warning">Required</span> - Provide verifier hash code from "Get Forget Password Request"</td> </tr> </tbody> </table> <h5>Sample Set New Password Request:</h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-info">    curl -v -X POST https://yourdomain.com/api/forget-password \
    -H "Content-Type: application/json" \
    -d \'{
        "new_password" : "123456789",
        "password_confirmation" : "123456789",
        "verification_code" : "123456",
        "email" : "jhondoe@gmail.com",
        "verifier_hash_code" : "$2y$10$Hy5KxTxLOREsrvjZnhBut.hcrg9w2EaxZZVIJTRsM9fO5uhw.d97y"
    }\'

</pre>
</div>
</div>
    <h5>Sample Set New Password Successful Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "New password is updated. Please login your account."
    }
</pre>
    </div></div><h5>Sample Set New Password Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": false,
        "message": "The verifier has code is invalid."
    }
</pre>
    </div></div></div><div id="getEmailVerificationCode"><h4 class="py-3"> </h4><h4 class="py-3">Get Email Verification Code</h4><p>Sends request for verification user\'s email. Required POST method and request post data are "email". If successful, the method will return verifier hash code.</p> <p>Get Email Verification Link/Code Endpoint: <a class="text-info">https://yourdomain.com/api/verification/email</a></p> <table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color"> <tbody> <tr> <td class="w-25 text-uppercase"><strong>Field</strong></td> <td class="strong text-uppercase"><strong>Description</strong></td> </tr> <tr> <td>email</td> <td><span class="text-warning">Required</span> - Set user\'s email</td></tr></tbody></table><h5>Sample Get Email Verification Link/Code Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X POST https://yourdomain.com/api/verification/email \
    -H "Content-Type: application/json" \
    -d \'{
        "email": "jhondoe@gmail.com"
    }\'

</pre>
</div></div><h5>Sample Get Email Verification Link/Code Successful Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "Email verification link is sent successfully.",
        "data": {
            "verifier_hash_code": "$2y$10$yh6b9vUFTi1B4Jywdc/YbuYMWQs.Wkl.STSikyt6ZNQYnMGIBndbG",
            "email": "jhondoe@gmail.com"
        }
    }
</pre>
</div></div><h5>Sample Get Email Verification Link/Code Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">
    {
        "success": false,
        "message": "The given email address is already verified."
    }
</pre>
</div></div></div><div id="verifyEmailVerificationCode"><h4 class="py-3"> </h4><h4 class="py-3">Verify Email Verification Code</h4><p>Sends request to verify code sent to user\'s email. Required POST method and request post data are "email", "verifier_hash_code", "verification_code". If successful, the method will return verifier hash code.</p> <p>Verify Email Verification Code Endpoint: <a class="text-info">https://yourdomain.com/api/verification/verify-email-code</a></p> <table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color"> <tbody> <tr> <td class="w-25 text-uppercase"><strong>Field</strong></td> <td class="strong text-uppercase"><strong>Description</strong></td> </tr> <tr> <td>email</td> <td><span class="text-warning">Required</span> - Set user\'s email</td></tr><tr><td>verifier_hash_code</td><td><span class="text-warning">Required</span> - Provide verifier hash code from "Get Email Verification Request" response</td></tr><tr><td>verification_code</td><td><span class="text-warning">Required</span> - The Verification code given by user which was sent to user\'s registered email</td> </tr> </tbody> </table> <h5>Sample Verify Email Verification Link/Code Request:</h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-info">    curl -v -X POST https://yourdomain.com/api/verification/verify-email-code \
    -H "Content-Type: application/json" \
    -d \'{
      "email": "jhondoe@gmail.com"
    }\'

    </pre>
</div> </div> <h5>Sample Verify Email Verification Code Successful Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "Your account has been verified successfully."
    }
</pre>
</div> </div> <h5>Sample Verify Email Verification Code Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
        "success": false,
        "message": "The verifier has code is invalid."
    }
</pre>
</div> </div> </div> <div id="getUserProfile"> <h4 class="py-3"> </h4> <h4 class="py-3">Get User Profile</h4> <p>Sends request to get user profile detail. Required GET method with Bearer/Access Token in HEADER request. If successful, the method will return profile detail.</p> <p>Get Profile Detail Endpoint: <a class="text-info">https://yourdomain.com/api/user/profile/show</a></p> <h5>Sample Get Profile Detail Request:</h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-info">    curl -v -X POST https://yourdomain.com/api/user/profile/show \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token"

    </pre>
</div> </div> <h5>Sample Get Profile Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "data": {
            "user": {
                "id": "c0add1c9-bede-4224-ab5c-adcf79b0cb66",
                "assigned_role": "user",
                "referrer_id": null,
                "referral_code": "fcdd3595-6ebe-4668-a65b-6444344eae1a",
                "username": "jhondoe",
                "email": "jhondoe@gmail.com",
                "avatar": null,
                "google2fa_secret": null,
                "is_id_verified": 0,
                "is_email_verified": 0,
                "is_financial_active": 1,
                "is_accessible_under_maintenance": 0,
                "is_super_admin": 0,
                "status": "active",
                "created_by": null,
                "created_at": "2020-11-12T09:13:38.000000Z",
                "updated_at": "2020-11-12T09:13:38.000000Z",
                "preference": null,
                "profile": {
                    "id": "d2354e68-858c-4353-96ed-84cb22fa5af2",
                    "user_id": "c0add1c9-bede-4224-ab5c-adcf79b0cb66",
                    "first_name": "Jhon",
                    "last_name": "Doe",
                    "address": null,
                    "phone": null,
                    "created_at": "2020-11-12T09:13:38.000000Z",
                    "updated_at": "2020-11-12T09:13:38.000000Z"
                }
            }
        }
    }
</pre>
</div> </div> <h5>Sample Get Profile Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
        "message": "Unauthenticated."
    }
</pre>
</div> </div> </div> <div id="updateUserProfile"> <h4 class="py-3"> </h4> <h4 class="py-3">Update User Profile</h4> <p>Sends request to update user profile detail. Required PUT method with Bearer/Access-Token in HEADER request and form data are "first_name", "last_name", "address". If successful, the method will return success message.</p> <p>Update Profile Detail Endpoint: <a class="text-info">https://yourdomain.com/api/user/profile/update</a></p> <table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color"> <tbody> <tr> <td class="w-25 text-uppercase"><strong>Field</strong></td> <td class="strong text-uppercase"><strong>Description</strong></td> </tr> <tr> <td>first_name</td> <td><span class="text-warning">Required</span> - Set user\'s first name</td></tr><tr><td>last_name</td><td><span class="text-warning">Required</span> - Set user\'s last name</td> </tr> <tr> <td>address</td> <td><span class="text-warning">Optional</span> - Set user\'s address</td></tr></tbody></table><h5>Sample Update Profile Detail Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X PUT https://yourdomain.com/api/user/profile/update \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token \
    -d \'{
        "first_name": "Jhon",
      "last_name": "Doe",
    }\'

</pre>
</div> </div> <h5>Sample Get Profile Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "Profile has been updated successfully."
    }
</pre>
</div> </div> <h5>Sample Update Profile Error Response: <span class="small">STATUS CODE - <span class="text-danger">401</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
        "message": "Unauthenticated."
    }
</pre>
</div> </div> </div> <div id="changeUserAvatar"> <h4 class="py-3"> </h4> <h4 class="py-3">Change User Avatar</h4> <p>Sends request to update user profile detail. Required POST method with Bearer/Access-Token in HEADER request and form data are "avatar". If successful, the method will return success message and the updated avatar url.</p> <p>Change Profile Avatar Endpoint: <a class="text-info">https://yourdomain.com/api/user/profile/avatar/update</a></p> <table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color"> <tbody> <tr> <td class="w-25 text-uppercase"><strong>Field</strong></td> <td class="strong text-uppercase"><strong>Description</strong></td> </tr> <tr> <td>avatar</td> <td><span class="text-warning">Required</span> - Set user\'s first name</td> </tr> </tbody> </table> <h5>Sample Change Profile Avatar Request:</h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-info">    curl -v -X POST https://yourdomain.com/api/user/profile/avatar/update \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token \
    -d \'{
      "avatar": "file"
    }\'

</pre>
</div></div><h5>Sample Change Profile Avatar Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "Avatar has been uploaded successfully.",
        "data": {
            "avatar": "urlOfUpdatedAvatar"
        }
    }
</pre>
</div></div><h5>Sample Change Profile Avatar Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": false,
        "message": "Failed to upload the avatar."
    }
</pre>
</div></div></div><div id="changePassword"><h4 class="py-3"> </h4><h4 class="py-3">Change Password</h4><p>Sends request to change user password. Required PUT method with Bearer/Access-Token in HEADER request and form data are "password", "new_password", "new_password_confirmation". If successful, the method will return success message.</p><p>Change Password Endpoint: <a class="text-info">https://yourdomain.com/api/user/password/update</a></p> <table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color"> <tbody> <tr> <td class="w-25 text-uppercase"><strong>Field</strong></td> <td class="strong text-uppercase"><strong>Description</strong></td> </tr> <tr> <td>password</td> <td><span class="text-warning">Required</span> - Set user\'s old password</td> </tr> <tr> <td>new_password</td> <td><span class="text-warning">Required</span> - Set user\'s new password</td> </tr> <tr> <td>new_password_confirmation</td> <td><span class="text-warning">Required</span> - Confirm new password</td> </tr> </tbody> </table> <h5>Sample Change Password Request:</h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-info">    curl -v -X PUT https://yourdomain.com/api/user/password/update \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token \
    -d \'{
        "password": "123456789",
        "new_password": "123456789",
        "new_password_confirmation": "123456789"
    }\'

    </pre>
</div> </div> <h5>Sample Change Password Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "Password has been changed successfully."
    }
</pre>
</div> </div> <h5>Sample Change Password Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
        "success": false,
        "message": "Failed to change the password."
    }
</pre>
</div> </div> </div> <div id="getProfilePreference"> <h4 class="py-3"> </h4> <h4 class="py-3">Get Profile Preference</h4> <p>Sends request to get profile preference. Required GET method with Bearer/Access-Token in HEADER request. If successful, the method will return profile preference detail.</p> <p>Get Preference Endpoint: <a class="text-info">https://yourdomain.com/api/user/password/update</a></p> <h5>Sample Get Profile Preference Request:</h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-info">    curl -v -X GET https://yourdomain.com/api/user/preference/show \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token

</pre>
</div></div><h5>Sample Get Preference Successful Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "data": {
            "preference": {
                "user_id": "c0add1c9-bede-4224-ab5c-adcf79b0cb66",
                "default_language": "en",
                "default_coin_pair": null,
                "id": "82d30318-fa9c-42ad-a992-afa87337c324"
            }
        }
    }
</pre>
</div></div><h5>Sample Get Preference Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "message": "Unauthenticated."
    }
</pre>
</div></div></div><div id="updateProfilePreference"><h4 class="py-3"> </h4><h4 class="py-3">Update Profile Preference</h4><p>Sends request to update user preference. Required PUT method with Bearer/Access-Token in HEADER request and form data are "display_language", "default_coin_pair". If successful, the method will return success message.</p><p>Update Preference Endpoint: <a class="text-info">https://yourdomain.com/api/user/preference/update</a></p> <table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color"> <tbody> <tr> <td class="w-25 text-uppercase"><strong>Field</strong></td> <td class="strong text-uppercase"><strong>Description</strong></td> </tr> <tr> <td>display_language</td> <td><span class="text-warning">Optional</span> - Set user\'s preferred language.</td> </tr> <tr> <td>default_coin_pair</td> <td><span class="text-warning">Optional</span> - Set user\'s preferred coin pair.</td> </tr> </tbody> </table> <h5>Sample Update Preference Request:</h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-info">    curl -v -X PUT https://yourdomain.com/api/user/preference/update \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token \
    -d \'{
        "display_language": "en",
        "default_coin_pair": "BTC_USD"
    }\'

    </pre>
</div>
</div>
    <h5>Sample Update Preference Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5>
    <div class="card my-2 mb-3 lf-toggle-bg-card">
        <div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "Preference has been updated successfully."
    }
</pre>
</div></div><h5>Sample Update Preference Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": false,
        "message": "Failed to update preference."
    }
</pre>
</div></div></div><div id="kycVerification"><h4 class="py-3"> </h4><h4 class="py-3">KYC Verification</h4><p>Sends request to submit KYC verification document(S). Required POST method with Bearer/Access-Token in HEADER request and form data are "id_type", "id_card_front" and "id_card_back" (optional if id type is passport). If successful, the method will return success message.</p><p>KYC Verification Endpoint: <a class="text-info">https://yourdomain.com/api/user/kyc-verifications</a></p><table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color"><tbody><tr><td class="w-25 text-uppercase"><strong>Field</strong></td><td class="strong text-uppercase"><strong>Description</strong></td></tr><tr><td>id_type</td><td><span class="text-warning">Required</span> - Set ID verification type one of the following - "national_id", "driving_license", "passport".</td></tr><tr><td>id_card_front</td><td><span class="text-warning">Required</span> - Set ID\'s front image.</td></tr><tr><td>id_card_back</td><td><span class="text-warning">Optional if the id type is passport</span> - Set ID\'s back image.</td></tr></tbody></table><h5>Sample KYC Verification Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X POST https://yourdomain.com/api/user/kyc-verifications \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token \
    -d \'{
        "id_type": "national_id",
        "id_card_front": "image...",
        "id_card_back": "image...",
    }\'

</pre>
</div></div><h5>Sample Update KYC verification Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "ID has been uploaded successfully."
    }
</pre>
</div></div><h5>Sample KYC Verification Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": false,
        "message": "Failed to upload ID."
    }
</pre>
</div></div></div><div id="getTickets"><h4 class="py-3"> </h4><h4 class="py-3">Get Tickets</h4><p>Sends request to get user\'s tickets . Required GET method with Bearer/Access-Token in HEADER request. If successful, the method will return tickets detail.</p><p>Get Tickets Endpoint: <a class="text-info">https://yourdomain.com/api/user/tickets</a></p><h5>Sample Get Tickets Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X GET https://yourdomain.com/api/user/tickets \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token

    </pre>
</div></div><h5>Sample Get Tickets Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "data": {
            "tickets": {
                "current_page": 1,
                "data": [],
                "first_page_url": "http://trademen.local/api/user/tickets?page=1",
                "from": null,
                "last_page": 1,
                "last_page_url": "http://trademen.local/api/user/tickets?page=1",
                "links": [
                    {
                        "url": null,
                        "label": "« Previous",
                        "active": false
                    },
                    {
                        "url": "http://trademen.local/api/user/tickets?page=1",
                        "label": 1,
                        "active": true
                    },
                    {
                        "url": null,
                        "label": "Next »",
                        "active": false
                    }
                ],
                "next_page_url": null,
                "path": "http://trademen.local/api/user/tickets",
                "per_page": 15,
                "prev_page_url": null,
                "to": null,
                "total": 0
            }
        }
    }
</pre>
</div></div><h5>Sample Get Tickets Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "message": "Unauthenticated."
    }
</pre>
</div></div></div><div id="getTicketDetail"><h4 class="py-3"> </h4><h4 class="py-3">Get Ticket Detail</h4><p>Sends request to get user\'s single ticket detail. Required GET method with Bearer/Access-Token in HEADER request. If successful, the method will return single ticket detail.</p><p>Get Ticket Detail Endpoint: <a class="text-info">https://yourdomain.com/api/user/tickets/{ticketID}/show</a></p><h5>Sample Get Ticket Detail Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X GET https://yourdomain.com/api/user/tickets/c0add1c9-bede-4224-ab5c-adcf79b0cb66/show \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token

</pre>
</div></div><h5>Sample Get Ticket Detail Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "data": {
            "tickets": {
                "current_page": 1,
                "data": [],
                "first_page_url": "http://trademen.local/api/user/tickets?page=1",
                "from": null,
                "last_page": 1,
                "last_page_url": "http://trademen.local/api/user/tickets?page=1",
                "links": [
                    {
                        "url": null,
                        "label": "« Previous",
                        "active": false
                    },
                    {
                        "url": "http://trademen.local/api/user/tickets?page=1",
                        "label": 1,
                        "active": true
                    },
                    {
                        "url": null,
                        "label": "Next »",
                        "active": false
                    }
                ],
                "next_page_url": null,
                "path": "http://trademen.local/api/user/tickets",
                "per_page": 15,
                "prev_page_url": null,
                "to": null,
                "total": 0
            }
        }
    }
</pre>
</div></div><h5>Sample Get Ticket Detail Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "message": "Unauthenticated."
    }
</pre>
</div></div></div><div id="storeTicket"><h4 class="py-3"> </h4><h4 class="py-3">Submit a Ticket</h4><p>Sends request to place a support ticket. Required POST method with Bearer/Access-Token in HEADER request and form data are "title", "content", "previous_id" and "attachment" . If successful, the method will return single ticket detail.</p><table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color"><tbody><tr><td class="w-25 text-uppercase"><strong>Field</strong></td><td class="strong text-uppercase"><strong>Description</strong></td></tr><tr><td>title</td><td><span class="text-warning">Required</span> - Set ticket title.</td></tr><tr><td>previous_id</td><td><span class="text-warning">Optional</span> - Set ticket previous reference ID.</td></tr><tr><td>attachment</td><td><span class="text-warning">Optional</span> - Set ticket previous attachment image.</td></tr></tbody></table><p>Submit a Ticket Endpoint: <a class="text-info">https://yourdomain.com/api/user/tickets</a></p><h5>Sample Submit a Ticket Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X POST https://yourdomain.com/api/user/tickets \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token \
    -d \'{
        "title": "Ticket Title Goes Here.",
      "content": "Ticket Content",
      "previous_id": "c0add1c9-bede-4224-ab5c-adcf79b0cb66",
      "attachment": "files goes here..."
    }\'

</pre>
</div></div><h5>Sample Submit a Ticket Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "Ticket has been created successfully.",
        "data": {
            "ticket": {
                "user_id": "c0add1c9-bede-4224-ab5c-adcf79b0cb66",
                "title": "Ticket Title Goes Here",
                "content": "Ticket Content Goes Here.",
                "id": "9e13143a-0e6c-4251-8d03-f8fc24372be1",
                "updated_at": "2020-11-15T05:15:57.000000Z",
                "created_at": "2020-11-15T05:15:57.000000Z"
            }
        }
    }
</pre>
</div></div><h5>Sample Submit Ticket Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": false,
        "message": "Failed to create the ticket."
    }
</pre>
</div></div></div><div id="commentOnTicket"><h4 class="py-3"> </h4><h4 class="py-3">Comment on Ticket</h4><p>Sends request to place a comment on support ticket. Required POST method with Bearer/Access-Token in HEADER request and the url parameter is ticket ID and the form data is "content" and "attachment" (optional). If successful, the method will return success message.</p><p>Comment on a Ticket Endpoint: <a class="text-info">https://yourdomain.com/api/user/tickets/{ticketID}/comment</a></p><table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color"><tbody><tr><td class="w-25 text-uppercase"><strong>Field</strong></td><td class="strong text-uppercase"><strong>Description</strong></td></tr><tr><td>content</td><td><span class="text-warning">Required</span> - Set comment for ticket.</td></tr><tr><td>attachment</td><td><span class="text-warning">Optional</span> - Upload attachment image.</td></tr></tbody></table><h5>Sample Comment on Ticket Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X POST https://yourdomain.com/api/user/tickets/c0add1c9-bede-4224-ab5c-adcf79b0cb66/comment \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token \
    -d \'{
        "content": "Comment content goes here..",
        "attachment": "image file goes here..",
    }\'

</pre>
</div></div><h5>Sample Comment on Ticket Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "The message has been created successfully."
    }
</pre>
</div></div><h5>Sample Comment on Ticket Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": false,
        "message": "Failed to place the comment."
    }
</pre>
</div></div></div><div id="closeTicket"><h4 class="py-3"> </h4><h4 class="py-3">Close a Ticket</h4><p>Sends request to close a support ticket. Required PUT method with Bearer/Access-Token in HEADER request and url parameter is ticket ID. If successful, the method will return success message.</p><p>Close a Ticket Endpoint: <a class="text-info">https://yourdomain.com/api/user/tickets/{ticketID}/close</a></p><h5>Sample Submit a Ticket Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X PUT https://yourdomain.com/api/user/tickets/c0add1c9-bede-4224-ab5c-adcf79b0cb66/close \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token

</pre>
</div></div><h5>Sample Submit a Ticket Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "The ticket has been closed successfully."
    }
</pre>
</div></div><h5>Sample Submit Ticket Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": false,
        "message": "The relevant data is not found."
    }
</pre>
</div></div></div><div id="downloadCommentAttachment"><h4 class="py-3"> </h4><h4 class="py-3">Download Comment Attachment</h4><p>Sends request to download a comment attachment for a support ticket. Required GET method with Bearer/Access-Token in HEADER request and url parameter is ticket ID and fileName. If successful, the method will return attachment file.</p><p>Download Comment attachment Endpoint: <a class="text-info">https://yourdomain.com/api/user/tickets/{ticketID}/download-attachment/{fileName}</a></p><h5>Sample Download a Comment Attachment Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X GET https://yourdomain.com/api/user/tickets/c0add1c9-bede-4224-ab5c-adcf79b0cb66/download-attachment/c0add1c9-bede-4224-ab5c-adcf79b0cb66 \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token

</pre>
</div></div><h5>Download Comment Attachment Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><h5>Sample Submit Ticket Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5></div><div id="getWallets"><h4 class="py-3"> </h4><h4 class="py-3">Get Wallets</h4><p>Sends request to get wallets detail of user. Required GET method with Bearer/Access-Token in HEADER request. If successful, the method will return wallets detail.</p><p>Get Wallets Endpoint: <a class="text-info">https://yourdomain.com/api/user/wallets</a></p><h5>Sample Get Wallets Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X GET https://yourdomain.com/api/user/wallets \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token

</pre>
</div></div><h5>Sample Get Wallets Detail Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "data": {
            "current_page": 1,
            "data": [
                {
                    "id": "8ac8dbee-666f-42bf-bb56-d4ff9276434d",
                    "user_id": "c0add1c9-bede-4224-ab5c-adcf79b0cb66",
                    "symbol": "BTC",
                    "primary_balance": "0.00000000",
                    "address": null,
                    "passphrase": null,
                    "is_system_wallet": false,
                    "is_active": true,
                    "created_at": "2020-11-15T10:35:46.000000Z",
                    "updated_at": "2020-11-15T10:35:46.000000Z",
                    "on_order_balance": null,
                    "coin": {
                        "symbol": "BTC",
                        "name": "Bitcoin",
                        "icon": null
                    }
                },
                {
                    "id": "15111092-39bb-49f8-944a-6284bf104dc8",
                    "user_id": "c0add1c9-bede-4224-ab5c-adcf79b0cb66",
                    "symbol": "USD",
                    "primary_balance": "0.00000000",
                    "address": null,
                    "passphrase": null,
                    "is_system_wallet": false,
                    "is_active": true,
                    "created_at": "2020-11-15T10:35:46.000000Z",
                    "updated_at": "2020-11-15T10:35:46.000000Z",
                    "on_order_balance": null,
                    "coin": {
                        "symbol": "USD",
                        "name": "United States Dollar",
                        "icon": null
                    }
                }
            ],
            "first_page_url": "http://trademen.local/api/user/wallets?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "http://trademen.local/api/user/wallets?page=1",
            "links": [
                {
                    "url": null,
                    "label": "« Previous",
                    "active": false
                },
                {
                    "url": "http://trademen.local/api/user/wallets?page=1",
                    "label": 1,
                    "active": true
                },
                {
                    "url": null,
                    "label": "Next »",
                    "active": false
                }
            ],
            "next_page_url": null,
            "path": "http://trademen.local/api/user/wallets",
            "per_page": 15,
            "prev_page_url": null,
            "to": 2,
            "total": 2
        }
    }
</pre>
</div></div><h5>Sample Get Wallets Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "message": "Unauthenticated."
    }
</pre>
</div></div></div><div id="depositList"><h4 class="py-3"> </h4><h4 class="py-3">Deposit List</h4><p>Sends request to get user\'s deposit list. Required GET method with Bearer/Access-Token in HEADER request and the url parameter is currencySymbol. If successful, the method will return deposit list.</p><p>Get Deposit List Endpoint: <a class="text-info">https://yourdomain.com/api/user/wallets/{currencySymbol}/deposits</a></p><h5>Sample Get Deposit Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X GET https://yourdomain.com/api/user/wallets/BTC/deposits \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token

</pre>
</div></div><h5>Sample Get Deposit List Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "data": {
            "current_page": 1,
            "data": [],
            "first_page_url": "http://trademen.local/api/user/wallets/USD/deposits?page=1",
            "from": null,
            "last_page": 1,
            "last_page_url": "http://trademen.local/api/user/wallets/USD/deposits?page=1",
            "links": [
                {
                    "url": null,
                    "label": "« Previous",
                    "active": false
                },
                {
                    "url": "http://trademen.local/api/user/wallets/USD/deposits?page=1",
                    "label": 1,
                    "active": true
                },
                {
                    "url": null,
                    "label": "Next »",
                    "active": false
                }
            ],
            "next_page_url": null,
            "path": "http://trademen.local/api/user/wallets/USD/deposits",
            "per_page": 15,
            "prev_page_url": null,
            "to": null,
            "total": 0
        }
}
</pre>
</div></div><h5>Sample Get Deposit List Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
    "message": "Unauthenticated."
    }
</pre>
</div></div></div><div id="getSystemAvailablePayment"><h4 class="py-3"> </h4><h4 class="py-3">Get System’s Available Payment Methods</h4><p>Gets System’s Available Payment Methods for a given currency. Required GET method and url parameter is currency symbol . If successful, the method will return a success message and a list of available payment methods and bank information with 200 HTTP status.</p><p>Get System\'s Available Payment Methods Endpoint: <a class="text-info">https://yourdomain.com/api/coins/{currencySymbol}/payment-methods</a></p><h5>Sample Get Deposit Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X GET https://yourdomain.com/api/coins/USD/payment-methods \
    -H "Content-Type: application/json"

</pre>
</div></div><h5>Sample Get System\'s Available Payment Methods Successful Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
    "success": true,
        "data": {
        "availablePaymentMethods": {
            "BankApi": "Bank"
            },
            "selectedSystemBanks": [
                {
                    "id": "e062682a-6d4f-4809-bad3-0327fc09cc0b",
                    "country": "Yemen",
                    "bankName": "Graham and Sons",
                    "iban": "SE2508297029259183706664",
                    "swift": "BYNLEP58",
                    "referenceNumber": "953987",
                    "accountHolder": "Robbie Kunde V",
                    "bankAddress": "226 Hildegard Gardens Suite 687\nGladysside, WI 89356-4682",
                    "accountHolderAddress": "578 Tomasa Radial\nLake Gay, KS 22988",
                    "isActive": 1
                }
            ]
        }
    }
</pre>
</div></div><h5>Sample Get Deposit List Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
    "success": false,
        "message": "The relevant data is not found."
    }
</pre>
</div></div></div><div id="getUserBankAccounts"><h4 class="py-3"> </h4><h4 class="py-3">Get User’s Bank Accounts</h4><p>Gets user’s bank accounts. Required GET method. If successful, the method will return a success message and a list of user’s bank account information with 200 HTTP status.</p><p>Get System\'s Available Payment Methods Endpoint: <a class="text-info">https://yourdomain.com/api/user/bank-accounts</a></p><h5>Sample Get User’s Bank Accounts Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X GET https://yourdomain.com/api/user/bank-accounts \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token"

</pre>
</div></div><h5>Sample Get User Bank Accounts Request: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "data": [
            {
                "id": "37d0e460-9813-4fc8-8e6c-7658e5dbd1ba",
                "name": "Pagac and Sons",
                "iban": "Pagac and Sons",
                "swift": "QOQLZUKP5JT",
                "bankAddress": "4463 Jones Burgs\nPort Lonniefort, OH 75119-9136",
                "referenceNumber": "49093775212",
                "accountHolderAddress": "64284 Annabel Course\nSouth Joan, MT 89057-3689",
                "isVerified": "Verified",
                "isActive": "Active",
                "createdAt": "2020-10-27T09:26:30.000000Z"
            },
            {
                "id": "9a751cd5-a0a4-407c-aa0b-8dbe9b19ebce",
                "name": "Haag Inc",
                "iban": "Haag Inc",
                "swift": "JKGRTU67TMA",
                "bankAddress": "1040 Joshua Springs\nWest Kiaraview, NJ 26021-2701",
                "referenceNumber": "7192044944693",
                "accountHolderAddress": "88515 Janie Fork\nWest Brenden, NM 46622",
                "isVerified": "Verified",
                "isActive": "Active",
                "createdAt": "2020-10-27T09:26:30.000000Z"
            }
        ]
    }

</pre>
</div></div><h5>Sample Get user’s Bank Accounts Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "message": "Unauthenticated."
    }
</pre>
</div></div></div><div id="depositFiatCurrency"><h4 class="py-3"> </h4><h4 class="py-3">Deposit Fiat Currency</h4><p>Deposits fiat currency for given wallet. Required POST method and parameters are “amount”, “api”, “bank_account_id” (If api/payment method is bank), deposit_policy. If successful, the method will return a success message with 200 HTTP status comprising deposit details, user bank detail and system bank detail for user to send the amount to that system bank.</p><table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color"><tbody><tr><td class="w-25 text-uppercase"><strong>Field</strong></td><td class="strong text-uppercase"><strong>Description</strong></td></tr><tr><td>amount</td><td><span class="text-warning">Required</span> - The amount user wants to deposit</td></tr><tr><td>api</td><td><span class="text-warning">Required</span> - The available payment methods for the given currency. To get available payment methods see Get System\'s Available Payment Methods API</td></tr><tr><td>bank_account_id</td><td><span class="text-warning">Required if api/payment method is BANK</span> - The user bank account id by which he/she want to deposit. To get user bank account’s id see Get user\'s Bank Accounts API</td></tr><tr><td>deposit_policy</td><td><span class="text-warning">Required</span> - Accepted value is 1</td></tr></tbody></table><p>Deposit Fiat Currency Endpoint: <a class="text-info">https://yourdomain.com/api/user/wallets/{currencySymbol}/deposits/store</a></p><h5>Sample Deposit Fiat Currency Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X POST https://yourdomain.com/api/user/wallets/USD/deposits/store \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token" \
    -d \'{
    "amount": "200.00000000",
      "api": "BankApi",
      "bank_account_id": "724200fa-47f2-4e66-b02f-49a2d0f5db47",
      "deposit_policy": 1
    }\'

</pre>
</div></div><h5>Sample Deposit Fiat Currency Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "Deposit has been created successfully.",
        "data": {
            "depositDetails": {
                "id": "a591a65c-6332-49a1-ae53-e5297726a0ff",
                "user": "Brett Jacobson",
                "wallet": "United States Dollar (USD)",
                "amount": "200",
                "bank": "Pagac and Sons",
                "txnId": null,
                "status": "pending"
            },
            "userBankDetail": {
                "id": "37d0e460-9813-4fc8-8e6c-7658e5dbd1ba",
                "bankName": "Pagac and Sons",
                "bankAddress": "4463 Jones Burgs\nPort Lonniefort, OH 75119-9136",
                "accountHolder": "Prof. Axel Ebert",
                "referenceNumber": "49093775212",
                "swift": "QOQLZUKP5JT",
                "iban": "LV55ZSQZZ682H91BID460",
                "country": "Sao Tome and Principe",
                "isActive": "Active",
                "isVerified": "Verified"
            },
            "depositWithBanks": [
                {
                    "id": "e062682a-6d4f-4809-bad3-0327fc09cc0b",
                    "country": "Yemen",
                    "bankName": "Graham and Sons",
                    "iban": "SE2508297029259183706664",
                    "swift": "BYNLEP58",
                    "referenceNumber": "953987",
                    "accountHolder": "Robbie Kunde V",
                    "bankAddress": "226 Hildegard Gardens Suite 687\nGladysside, WI 89356-4682",
                    "accountHolderAddress": "578 Tomasa Radial\nLake Gay, KS 22988",
                    "isActive": "Active"
                }
            ]
        }
    }

</pre>
</div></div><h5>Sample Deposit Fiat Currency Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": false,
        "message": "Invalid fiat deposit request."
    }
</pre>
</div></div></div><div id="uploadFiatDepositReceiptForAdminReview"><h4 class="py-3"> </h4><h4 class="py-3">Upload Fiat Deposit Receipt For Admin Review</h4><p>Uploads user bank deposit receipt in system bank. Required POST method and URL parameters are currency symbol and deposit id and request form data are “system_bank_id”, “receipt” (image file). If successful, the method will return a success message with 200 HTTP status.</p><p>Upload Fiat Deposit Receipt Endpoint: <a class="text-info">https://yourdomain.com/api/user/wallets/{currencySymbol}/deposits/{depositID}/upload-bank-receipt</a></p><h5>Sample Upload Fiat Deposit Receipt Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X POST https://yourdomain.com/api/user/wallets/USD/deposits/824200fa-47f2-4e66-b02f-49a2d0f5db47/upload-bank-receipt \
    -H "Content-Type: multipart/form-data" \
    -H "Authorization: Bearer Access-Token" \
    -F "system_bank_id=824200fa-47f2-4e66-b02f-49a2d0f5db47" \
    -F "receipt=@/home/user1/Desktop/receipt.jpg"

</pre>
</div></div><h5>Sample Upload Fiat Deposit Receipt Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "Receipt has been uploaded successfully."
    }

</pre>
</div></div><h5>Sample Upload Fiat Deposit Receipt Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": false,
        "message": "Failed to upload receipt."
    }
</pre>
</div></div></div><div id="depositCryptocurrency"><h4 class="py-3"> </h4><h4 class="py-3">Get Crypto Wallet Deposit Address</h4><p>Gets wallet deposit address for cryptocurrency or crypto wallet. Required GET method and url parameter is cryptocurrency symbol. If successful, the method will return a wallet address and qrcode with 200 HTTP status.</p><p>Get Crypto Wallet Deposit Address Endpoint: <a class="text-info">https://yourdomain.com/api/user/wallets/{currencySymbol}/get-deposit-address</a></p><h5>Sample Get Crypto Wallet Deposit Address Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X GET https://yourdomain.com/api/user/wallets/BTC/get-deposit-address \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token"
</pre>
</div></div><h5>Sample Get Crypto Wallet Deposit Address Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "data": {
            "walletAddress": "0x7d0e46098134fc88e6c7658e5dbd1ba",
            "qrCode": ...
        }
    }

</pre>
</div></div><h5>Sample Get Crypto Wallet Deposit Address Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": false,
        "message": "Network Error! Unable to generate address."
    }
</pre>
</div></div></div><div id="getOrderList"><h4 class="py-3"> </h4><h4 class="py-3">Get Order List</h4><p>Gets all order list of the user. Required GET method with Bearer/Access-Token in HEADER request. If successful, the method will return a order list with 200 HTTP status.</p><p>Get Order Endpoint: <a class="text-info">https://yourdomain.com/api/user/orders</a></p><h5>Sample Get Order Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body"><pre class="text-info">    curl -v -X GET https://yourdomain.com/api/user/orders \-H "Content-Type: application/json" \-H "Authorization: Bearer Access-Token"</pre></div></div><h5>Sample Get Orders List Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "data": {
            "all_orders": {
                "current_page": 1,
                "data": [],
                "first_page_url": "http://trademen.local/api/user/orders?page=1",
                "from": null,
                "last_page": 1,
                "last_page_url": "http://trademen.local/api/user/orders?page=1",
                "links": [
                    {
                        "url": null,
                        "label": "« Previous",
                        "active": false
                    },
                    {
                        "url": "http://trademen.local/api/user/orders?page=1",
                        "label": 1,
                        "active": true
                    },
                    {
                        "url": null,
                        "label": "Next »",
                        "active": false
                    }
                ],
                "next_page_url": null,
                "path": "http://trademen.local/api/user/orders",
                "per_page": 15,
                "prev_page_url": null,
                "to": null,
                "total": 0
            }
        }
    }

</pre>
</div></div><h5>Sample Get Orders Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "message": "Unauthenticated."
    }
</pre>
</div></div></div><div id="getOpenOrderList"><h4 class="py-3"> </h4><h4 class="py-3">Get Open Order List</h4><p>Get all open orders for a given coinPair or market. Required GET method and Required URL parameter is currency symbol. If successful, the method will return open order list with 200 HTTP.</p><p>Get Order Endpoint: <a class="text-info">https://yourdomain.com/api/user/orders/{coinPair}/open</a></p><h5>Sample Get Open Orders Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X GET https://yourdomain.com/api/user/orders/BTC_USD/open \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token"
</pre>
</div></div><h5>Sample Get Open Orders Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "data": {
            "open_orders": []
        }
    }

</pre>
</div></div><h5>Sample Get Open Orders Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "message": "Unauthenticated."
    }
</pre>
</div></div></div><div id="placeOrder"><h4 class="py-3"> </h4><h4 class="py-3">Place Order</h4><p>Places a buy or sell order for a category (Limit, Stop Limit, Market) in a given market. Required POST method and the parameters are “order_type”, “category”, “trade_pair”, “price”, “amount”, “total” and “stop”. If successful, the method will return the order number</p>ph<table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color"><tbody><tr><td class="w-25 text-uppercase"><strong>Field</strong></td><td class="strong text-uppercase"><strong>Description</strong></td></tr><tr><td>order_type</td><td><span class="text-warning">Required</span> - Available order types are buy, sell.</td></tr><tr><td>category</td><td><span class="text-warning">Required</span> - Available categories are limit, stop_limt, market.</td></tr><tr><td>trade_pair</td><td><span class="text-warning">Required</span> - A pair like BTC_USD</td></tr><tr><td>price</td><td><span class="text-warning">Required if order category is not market</span> - Numeric between 0.000000001, 99999999999.99999999</td></tr><tr><td>amount</td><td><span class="text-warning">Required if order category is not market and order type is not sell</span> - Numeric between 0.000000001, 99999999999.99999999</td></tr><tr><td>total</td><td><span class="text-warning">Required if order category is not market and order type is not sell</span> - Numeric between 0.000000001, 99999999999.99999999</td></tr><tr><td>stop</td><td><span class="text-warning">Required if order category is stop_limit</span> - Numerice between 0.000000001, 99999999999.99999999</td></tr></tbody></table><p>Place Order Endpoint: <a class="text-info">https://yourdomain.com/api/user/orders/place</a></p><h5>Sample Limit Order Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X POST https://yourdomain.com/api/user/orders/place \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token" \
    -d \'{
    "order_type": "sell",
      "category": "limit",
      "trade_pair": "BTC_USD",
      "price": "7500.00000000",
      "amount": "0.5",
      "total": "3750.00000000",
    }\'
</pre>
</div></div><h5>Sample Limit order Successful Response : <span class="small">STATUS CODE - <span class="text-success">201</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "Your order has been placed successfully.",
        "data": {
            "order_id": "624200fa-47f2-4e66-b02f-49a2d0f5db47",
            "order_type": "sell",
            "price": "7500.00000000",
            "amount": "0.50000000",
            "total": "3750.00000000",
            "open_amount": "0.50000000",
            "exchanged": "0",
            "stop_limit": null,
            "date": "2020-05-21 22:00:00",
            "category": "limit"
        }
    }

</pre>
</div></div><hr><h5>Sample Market Order Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X POST https://yourdomain.com/api/user/orders/place \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token" \
    -d \'{
    "order_type": "buy",
        "category": "market",
        "trade_pair": "BTC_USD",
        "amount": "0.5"
    }\'
</pre>
</div></div><h5>Sample Market Order Successful Response : <span class="small">STATUS CODE - <span class="text-success">201</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "Your order has been placed successfully.",
        "data": {
            "order_id": "624200fa-47f2-4e66-b02f-49a2d0f5db47",
            "order_type": "buy",
            "price": "0",
            "amount": "0.50000000",
            "total": "0",
            "open_amount": "0.50000000",
            "exchanged": "0",
            "stop_limit": null,
            "date": "2020-05-21 22:00:00",
            "category": "market"
        }
    }
</pre>
</div></div><hr><h5>Sample Stop Limit Order Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X POST https://yourdomain.com/api/user/orders/place \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token" \
    -d \'{
    "order_type": "buy",
      "category": "stop_limit",
      "trade_pair": "BTC_USD",
      "price": "7500.00000000",
      "amount": "0.5",
      "total": "3750.00000000",
      "stop": "7600.00000000"
    }\'
</pre>
</div></div><h5>Sample Stop Limit Order Successful Response : <span class="small">STATUS CODE - <span class="text-success">201</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "Your order has been placed successfully.",
        "data": {
            "order_id": "624200fa-47f2-4e66-b02f-49a2d0f5db47",
            "order_type": "buy",
            "price": "7500.00000000",
            "amount": "0.50000000",
            "total": "3750.00000000",
            "open_amount": "0.50000000",
            "exchanged": "0",
            "stop_limit": "7600.00000000",
            "date": "2020-05-21 22:00:00",
            "category": "stop_limit"
        }
    }

</pre>
</div></div><h5>Sample Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "message": "Unauthenticated."
    }
</pre>
</div></div></div><div id="cancelOrder"><h4 class="py-3"> </h4><h4 class="py-3">Cancel Order</h4><p>Places an order cancel (both buy and sell) request for a any category (Limit, Stop Limit, Market) in a given market. Required DELETE method and the required URL parameter is the order ID. If successful, the method will return a success message with 200 HTTP status.</p><p>Cancel Order Endpoint: <a class="text-info">https://yourdomain.com/api/user/orders/{orderID}/destroy</a></p><h5>Sample Cancel Order Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X DELETE https://yourdomain.com/api/user/orders/624200fa-47f2-4e66-b02f-49a2d0f5db47/destroy \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token"
</pre>
</div></div><h5>Sample Cancel Orders Successful Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "message": "The order cancellation request has been placed successfully."
    }

</pre>
</div></div><h5>Sample Get Orders Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": false,
        "message": "The order cancellation request has been placed successfully."
    }
</pre>
</div></div></div><div id="getTradeHistory"><h4 class="py-3"> </h4><h4 class="py-3">Get Trade History</h4><p>Sends request to get trade history. Required GET method with Bearer/Access-Token in HEADER request. If successful, the method will return trade history.</p><p>Get Trade History Endpoint: <a class="text-info">https://yourdomain.com/api/user/trade-history</a></p><h5>Sample Get Trade History Order Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X GET https://yourdomain.com/api/user/trade-history \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token"
</pre>
</div></div><h5>Sample Get Trade History Successful Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "data": {
            "trade_history": {
                "current_page": 1,
                "data": [],
                "first_page_url": "http://trademen.local/api/user/trade-history?page=1",
                "from": null,
                "last_page": 1,
                "last_page_url": "http://trademen.local/api/user/trade-history?page=1",
                "links": [
                    {
                        "url": null,
                        "label": "« Previous",
                        "active": false
                    },
                    {
                        "url": "http://trademen.local/api/user/trade-history?page=1",
                        "label": 1,
                        "active": true
                    },
                    {
                        "url": null,
                        "label": "Next »",
                        "active": false
                    }
                ],
                "next_page_url": null,
                "path": "http://trademen.local/api/user/trade-history",
                "per_page": 15,
                "prev_page_url": null,
                "to": null,
                "total": 0
            }
        }
    }

</pre>
</div></div><h5>Sample Get Trade History Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "message": "Unauthenticated."
    }
</pre>
</div></div></div><div id="getWithdrawalList"><h4 class="py-3"> </h4><h4 class="py-3">Get Withdrawal List</h4><p>Sends request to get withdrawal list for given wallet / currency. Required GET method and Required URL parameter is currency symbol. If successful, the method will return a list of withdrawals message with 200 HTTP.</p><p>Get Withdrawal List Endpoint: <a class="text-info">https://yourdomain.com/api/user/wallets/{currencySymbol}/withdrawals</a></p><h5>Sample Get Withdrawal List Request:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X GET https://yourdomain.com/api/user/wallets/USD/withdrawals \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer Access-Token"
</pre>
</div></div><h5>Sample Get Withdrawal List Successful Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "success": true,
        "data": {
            "current_page": 1,
            "data": [
                {
                    "id": "086aa961-41aa-403e-a2de-5c5b9f78115e",
                    "user_id": "658532d7-3aa2-4e3c-bb30-4d2b60a61440",
                    "wallet_id": "ec048965-2206-4680-9b11-8aaba17ca9fc",
                    "bank_account_id": "37d0e460-9813-4fc8-8e6c-7658e5dbd1ba",
                    "symbol": "USD",
                    "address": null,
                    "amount": "1443.49232849",
                    "system_fee": "28.86984656",
                    "txn_id": "5d04d0ae-5f31-4d9e-b3a6-15499d72cfa8",
                    "api": "BankApi",
                    "status": "completed",
                    "created_at": "2020-10-13T17:44:01.000000Z",
                    "updated_at": "2020-10-04T00:01:52.000000Z",
                    "bank_account": {
                        "id": "37d0e460-9813-4fc8-8e6c-7658e5dbd1ba",
                        "user_id": "658532d7-3aa2-4e3c-bb30-4d2b60a61440",
                        "country_id": 190,
                        "bank_name": "Pagac and Sons",
                        "iban": "LV55ZSQZZ682H91BID460",
                        "swift": "QOQLZUKP5JT",
                        "reference_number": "49093775212",
                        "account_holder": "Prof. Axel Ebert",
                        "bank_address": "4463 Jones Burgs\nPort Lonniefort, OH 75119-9136",
                        "account_holder_address": "64284 Annabel Course\nSouth Joan, MT 89057-3689",
                        "is_verified": 1,
                        "is_active": 1,
                        "created_at": "2020-10-27T09:26:30.000000Z",
                        "updated_at": "2020-10-27T09:26:30.000000Z"
                    }
                },
                ...
            ],
            "first_page_url": "http://trademen.local/api/user/wallets/USD/withdrawals?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "http://trademen.local/api/user/wallets/USD/withdrawals?page=1",
            "links": [
                {
                    "url": null,
                    "label": "« Previous",
                    "active": false
                },
                {
                    "url": "http://trademen.local/api/user/wallets/USD/withdrawals?page=1",
                    "label": 1,
                    "active": true
                },
                {
                    "url": null,
                    "label": "Next »",
                    "active": false
                }
            ],
            "next_page_url": null,
            "path": "http://trademen.local/api/user/wallets/USD/withdrawals",
            "per_page": 15,
            "prev_page_url": null,
            "to": 4,
            "total": 4
        }
    }

</pre>
</div></div><h5>Sample Get Withdrawal List Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-warning">    {
        "message": "Unauthenticated."
    }
</pre>
</div></div></div><div id="withdrawWalletBalance"><h4 class="py-3"> </h4><h4 class="py-3">Withdraw Balance</h4><p>Places withdraw request for given wallet / currency. Required POST method and Required URL parameter is currency symbol and request form data are “amount”, “withdrawal_policy”, “address” (required if the currency is crypto), “api” (required if the currency is fiat), “bank_account_id” (user bank account id is required if the api value is Bank) . If successful, the method will return a success message with 200 HTTP.</p><table class="table table-borderless table-striped lf-toggle-bg-card lf-toggle-border-card lf-toggle-border-color"><tbody><tr><td class="w-25 text-uppercase"><strong>Field</strong></td><td class="strong text-uppercase"><strong>Description</strong></td></tr><tr><td>amount</td><td><span class="text-warning">Required</span> - The amount user wants to withdraw/td&gt;</td></tr><tr><td>withdrawal_policy</td><td><span class="text-warning">Required</span> - Accepted value is 1</td></tr><tr><td>address</td><td><span class="text-warning">Required if currency is crypto</span> - Relevant crypto wallet address which receive the withdrawal amount</td></tr><tr><td>api</td><td><span class="text-warning">Required if the currency is fiat</span> - The available payment methods for the given currency. To get available payment methods see <a href="/private-api#getSystemAavailablePayment">Get System\'s Available Payment Methods</a> API</td></tr></tbody></table><p>Withdrawal Request for Crypto Wallet Endpoint: <a class="text-info">https://yourdomain.com/api/user/wallets/{CurrencySymbol}/withdrawals</a></p><h5>Sample Withdrawal Request for Crypto Wallet:</h5><div class="card my-2 mb-3 lf-toggle-bg-card"><div class="card-body">
<pre class="text-info">    curl -v -X POST https://yourdomain.com/api/user/wallets/BTC/withdrawals/store \
    -H "Content-Type: application/json" \
        -H "Authorization: Bearer Access-Token" \
        -d \'{
      "amount": "0.50000000",
      "withdrawal_policy": 1,
      "address": "0x24200fa47f24e66b02f49a2d0f5db47"
    }\'

        </pre>
</div> </div> <h5>Sample Withdrawal Request for Fiat Wallet:</h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-info">    curl -v -X POST https://yourdomain.com/api/user/wallets/USD/withdrawals/store \
    -H "Content-Type: application/json" \
            -H "Authorization: Bearer Access-Token" \
            -d \'{
        "amount": "0.50000000",
        "withdrawal_policy": 1,
        "api": "BankApi",
        "bank_account_id": "724200fa-47f2-4e66-b02f-49a2d0f5db47"
    }\'

            </pre>
</div></div><h5>Sample Withdraw Balance Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5><div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
                "success": true,
        "message": "Your withdrawal has been placed successfully."
    }

</pre>
    </div> </div> <h5>Sample Withdraw Balance Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
                "success": false,
        "message": "Unable to withdraw amount."
    }
</pre>
</div> </div> </div> <div id="cancelBankWithdrawalRequest"> <h4 class="py-3"> </h4> <h4 class="py-3">Cancel Bank Withdrawal Request</h4> <p>Places a bank withdrawal cancel request for fiat currencies. Required DELETE method and the required url parameter is the currency symbol and withdrawal ID. If successful, the method will return a success message with 200 HTTP status.</p> <p>Withdrawal Request for Crypto Wallet Endpoint: <a class="text-info">https://yourdomain.com/api/user/wallets/{CurrencySymbol}/withdrawals/destroy</a></p> <h5>Sample Cancel Bank Withdrawal Request:</h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-info">    curl -v -X DELETE https://yourdomain.com/api/user/wallets/USD/withdrawals/624200fa-47f2-4e66-b02f-49a2d0f5db47/destroy \
    -H "Content-Type: application/json" \
                -H "Authorization: Bearer Access-Token"
                </pre>
</div> </div> <h5>Sample Cancel Bank Withdrawal Request Successful Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
                    "success": true,
      "message": "The withdrawal cancellation will be processed shortly."
    }

</pre>
</div></div> <h5>Sample Cancel Withdrawal Request Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
                    "success": false,
      "message": "Failed to cancel the withdrawal."
    }
</pre>
</div> </div> </div> <div id="getReferralLink"> <h4 class="py-3"> </h4> <h4 class="py-3">Get Referral Link</h4> <p>Sends request to get referral link. Required GET method with Bearer/Access-Token in HEADER request. If successful, the method will return a referral link.</p> <p>Get Referral Link Endpoint: <a class="text-info">https://yourdomain.com/api/user/referral/get-link</a></p> <h5>Sample Get Referral Link Request:</h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-info">    curl -v -X GET https://yourdomain.com/api/user/referral/get-link \
    -H "Content-Type: application/json" \
                -H "Authorization: Bearer Access-Token"
                </pre>
</div> </div> <h5>Sample Get Referral Link Request Successful Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
                    "success": true,
        "data": {
                        "referral_link": "http://trademen.local/register?ref=fcdd3595-6ebe-4668-a65b-6444344eae1a"
        }
    }

</pre>
</div> </div> <h5>Sample Cancel Withdrawal Request Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
                    "message": "Unauthenticated."
    }
</pre>
</div> </div> </div> <div id="getReferralEarnings"> <h4 class="py-3"> </h4> <h4 class="py-3">Get Referral Earnings</h4> <p>Sends request to get referral earnings. Required GET method with Bearer/Access-Token in HEADER request. If successful, the method will return referral earnings.</p> <p>Get Referral Earnings Endpoint: <a class="text-info">https://yourdomain.com/api/user/referral/earnings</a></p> <h5>Sample Get Referral Earnings Request:</h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-info">    curl -v -X GET https://yourdomain.com/api/user/referral/earnings \
    -H "Content-Type: application/json" \
                -H "Authorization: Bearer Access-Token"
                </pre>
</div> </div> <h5>Sample Get Trade History Successful Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
                    "success": true,
        "data": {
                        "referral_earnings": {
                            "current_page": 1,
                "data": [],
                "first_page_url": "http://trademen.local/api/user/referral/earnings?page=1",
                "from": null,
                "last_page": 1,
                "last_page_url": "http://trademen.local/api/user/referral/earnings?page=1",
                "links": [
                    {
                        "url": null,
                        "label": "« Previous",
                        "active": false
                    },
                    {
                        "url": "http://trademen.local/api/user/referral/earnings?page=1",
                        "label": 1,
                        "active": true
                    },
                    {
                        "url": null,
                        "label": "Next »",
                        "active": false
                    }
                ],
                "next_page_url": null,
                "path": "http://trademen.local/api/user/referral/earnings",
                "per_page": 15,
                "prev_page_url": null,
                "to": null,
                "total": 0
            }
        }
    }

</pre>
</div> </div> <h5>Sample Get Trade History Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
                    "message": "Unauthenticated."
    }
</pre>
</div> </div> </div> <div id="getReferralUsers"> <h4 class="py-3"> </h4> <h4 class="py-3">Get Referral Users</h4> <p>Sends request to get referral users. Required GET method with Bearer/Access-Token in HEADER request. If successful, the method will return referral users list.</p> <p>Get Referral Users Endpoint: <a class="text-info">https://yourdomain.com/api/user/referral/users</a></p> <h5>Sample Get Referral Earnings Request:</h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-info">    curl -v -X GET https://yourdomain.com/api/user/referral/users \
    -H "Content-Type: application/json" \
                -H "Authorization: Bearer Access-Token"
                </pre>
</div> </div> <h5>Sample Get Referral Users Successful Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
                    "success": true,
        "data": {
                        "referral_users": {
                            "current_page": 1,
                "data": [],
                "first_page_url": "http://trademen.local/api/user/referral/users?page=1",
                "from": null,
                "last_page": 1,
                "last_page_url": "http://trademen.local/api/user/referral/users?page=1",
                "links": [
                    {
                        "url": null,
                        "label": "« Previous",
                        "active": false
                    },
                    {
                        "url": "http://trademen.local/api/user/referral/users?page=1",
                        "label": 1,
                        "active": true
                    },
                    {
                        "url": null,
                        "label": "Next »",
                        "active": false
                    }
                ],
                "next_page_url": null,
                "path": "http://trademen.local/api/user/referral/users",
                "per_page": 15,
                "prev_page_url": null,
                "to": null,
                "total": 0
            }
        }
    }

</pre>
</div> </div> <h5>Sample Get Referral Users Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
                    "message": "Unauthenticated."
    }
</pre>
</div> </div> </div> <div id="getReferralEarningsThroughUser"> <h4 class="py-3"> </h4> <h4 class="py-3">Get Referral Earnings Through User</h4> <p>Sends request to get referral earnings through user. Required GET method with Bearer/Access-Token in HEADER request and url parameter is user id. If successful, the method will return earnings through that user.</p> <p>Get Referral Users Endpoint: <a class="text-info">https://yourdomain.com/api/user/referral/users/{userID}/earnings</a></p> <h5>Sample Get Referral Earnings Through User Request:</h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-info">    curl -v -X GET https://yourdomain.com/api/user/referral/users/{userID}/earnings \
    -H "Content-Type: application/json" \
                -H "Authorization: Bearer Access-Token"
</pre>
</div> </div> <h5>Sample Get Referral Earnings Through User Successful Response: <span class="small">STATUS CODE - <span class="text-success">200</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
                    "success": true,
        "data": {
                        "earns_through_user": {
                            "current_page": 1,
                "data": [],
                "first_page_url": "http://trademen.local/api/user/referral/users/c0add1c9-bede-4224-ab5c-adcf79b0cb66/earnings?page=1",
                "from": null,
                "last_page": 1,
                "last_page_url": "http://trademen.local/api/user/referral/users/c0add1c9-bede-4224-ab5c-adcf79b0cb66/earnings?page=1",
                "links": [
                    {
                        "url": null,
                        "label": "« Previous",
                        "active": false
                    },
                    {
                        "url": "http://trademen.local/api/user/referral/users/c0add1c9-bede-4224-ab5c-adcf79b0cb66/earnings?page=1",
                        "label": 1,
                        "active": true
                    },
                    {
                        "url": null,
                        "label": "Next »",
                        "active": false
                    }
                ],
                "next_page_url": null,
                "path": "http://trademen.local/api/user/referral/users/c0add1c9-bede-4224-ab5c-adcf79b0cb66/earnings",
                "per_page": 15,
                "prev_page_url": null,
                "to": null,
                "total": 0
            }
        }
    }

</pre>
</div> </div> <h5>Sample Get Referral Earnings Through User Error Response: <span class="small">STATUS CODE - <span class="text-danger">400</span></span></h5> <div class="card my-2 mb-3 lf-toggle-bg-card"> <div class="card-body">
<pre class="text-warning">    {
                    "message": "Unauthenticated."
    }
</pre>
</div> </div> </div> </div></div></div></div></div></div></div></div></section>',
                'published_at' => '2020-11-03 07:09:21',
                'settings' => '{
                    "top_nav": "0",
                    "side_nav": "0",
                    "side_nav_fixed": "0",
                    "hide_breadcrumb": "1",
                    "navigation_type": "2",
                    "top_nav_transparent": "0",
                    "logo_inversed_top_nav": "0",
                    "logo_inversed_side_nav": "0"
                }',
                'is_home_page' => INACTIVE,
                'created_at' => $date,
                'updated_at' => $date,
            ],
        ];

        Page::insert($pages);
    }
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("deviceready", this.initPushwoosh, true);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        app.initPushwoosh();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    
    initPushwoosh: function(){
	    var pushNotification = window.plugins.pushNotification;
	    pushNotification.onDeviceReady();
	 	console.log(1);
	    pushNotification.registerDevice({ projectid: "821107598432", appid : "2A963-861C4" },
	        function(status) {
	            var pushToken = status;
	            console.warn('push token: ' + pushToken);
	            console.log(status);
	        },
	        function(status) {
	            console.warn(JSON.stringify(['failed to register ', status]));
	            console.log(status);
	        }
	        
	    );
 		console.log('Received Event: hoi');
	    document.addEventListener('push-notification', function(event) {
	        var title = event.notification.title;
	            var userData = event.notification.userdata;
	                                 
	            if(typeof(userData) != "undefined") {
	            console.warn('user data: ' + JSON.stringify(userData));
	        }
	                                     
	        navigator.notification.alert(title);
	    });
	    
	}
};

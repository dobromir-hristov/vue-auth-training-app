1. Implement sweetAlert2 as a helper to the Vue prototype - $notify.error, $notify.success, $confirm etc. Try adding it as a service so we can use it outside of Vue components.

2. Create a helper function to handle API errors. It should accept an api error and show an error message, using the above added functionality. Add it to the prototype if you can.

3. Add a page title property to each route. On each route change, change the title of the HTML document + show the title Above the header (like HC).

4. Learn how to add Axios interceptors
    1. Add the auth token to an Authorization header.
https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex#toc-hide-pages-behind-auth
    2. Add a 401 interceptor to logout the user if his token has expired.
 

5. Fetch user data after logging in. 
	1. Create a fetchUser action and store the fetched user data. Store user role in localStorage for auth on refresh.
	2. Call it after logging in.
	3. Call it when visiting the app (refresh).

6. Find how to save Vuex in localstorage

7. Modify the route guard helper to accept an array of roles and check if user has required role.

8. Implement different layouts for each route. Home and About should have top navbar, Admin should have side nav instead.

9. Add a language picker to the navigation.

10. Create a page for listing something. Use any api. Add pagination if you can. Then add a single page.

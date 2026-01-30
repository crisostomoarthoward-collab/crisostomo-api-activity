Markdown
# RESTful API Activity - Art Howard M. Crisostomo
## Best Practices Implementation
**1. Environment Variables:**
 -Why did we put `BASE_URI` in `.env` instead of hardcoding it?
    -Answer: `BASE_URI` is placed in `.env` so it can be updated easily without touching the source code. This also helps protect sensitive information.

**2. Resource Modeling:**
 - Why did we use plural nouns (e.g., `/dishes`) for our routes?
    - Answer: Plural route names are used because they represent multiple resources that the API can handle.

**3. Status Codes:**
 - When do we use `201 Created` vs `200 OK`?
    - Answer: 200 OK is returned when an operation is successful, such as retrieving or editing data, while 201 Created is returned when a new record is successfully created.

 - Why is it important to return `404` instead of just an empty array or a generic error?
    - Answer: Because a 404 Not Found response clearly informs the client that the requested resource is unavailable, instead of giving unclear or misleading results.

**4. Testing:**
 - ![alt text](<Screenshot 2026-01-30 194025.png>)

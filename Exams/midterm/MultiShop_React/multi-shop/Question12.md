# Breadcrumb Navigation

I chose to follow the suggetion given in the question which states to implement the breadcrumb navication shown at the top of the shop.html and detail.html and contact.html pages. In the process of this I realized that there was not ask to implement the contact page yet so I decided to not implement breadcrumbs for the contact page. If I end up creating that page in future I will implement the breadcrumb at that time.

## Component Name

Breadcrumb.jsx

## What it Does

My breadcrumb with take the implementation of breadcrumbs in the template app and add the ability to navigate with those within my react app.

## Where it is found

It is found in the location `/src/components/Layout/BreadCrumb.jsx`

## Where it is used

It is used when you navigate to the `/categories`, `/products/category/[category]`, `/products/[id]` locations. You can see the breadcrumbs at the top of those pages. It is also not visible on the home page of the app (`/`).

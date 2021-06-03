# Commerce Tools script

## Introduction

This is a basic template to write scripts that required a connection to CommerceTools.

If you find this requires something else, feel free to create a pull request

## Configuration

After cloning the repository, create a file containing the following to export the required variables:

```
export COMMERCE_TOOLS__CLIENT_ID=###############
export COMMERCE_TOOLS__CLIENT_SECRET=#############
export COMMERCE_TOOLS__PROJECT_KEY=########
export COMMERCE_TOOLS__API_HOST=############# (Usually https://api.commercetools.co if you are in US)
export COMMERCE_TOOLS__OAUTH_URL=############# (Usually https://auth.commercetools.co if you are in US)
export COMMERCE_TOOLS__CONCURRENCY=[A values below 15]
```

If you would like to configure logging add these:

```
export LOGGER__LEVEL=[INFO,DEBUG,WARN,ERROR]
export LOGGER__IS_DISABLED=[TRUE,FALSE]
```

## Execution

- `npm install`
- `npm start` for development or `npm run prod` for production

## Structure

To make the purpose of the script very clear, use a single folder under `services` and put a `index.js` file in it. For example, in the case of the template we are listing customers.

In your case could be:

- Listing orders for customers whose created date is prior to two years
- Creating a discount for all the products whose image is red
- Be creative

This _service_ is going to use Commerce Tools modules, which can be located under `src/commerce-tools`, in this example we are using customers. Feel free to add as many as you want.
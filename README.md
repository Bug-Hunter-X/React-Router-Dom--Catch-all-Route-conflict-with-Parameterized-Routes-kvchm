# React Router Dom Route Conflict

This repository demonstrates a common, yet subtle, bug in React Router Dom v6 and above, where a catch-all route (`*`) can unintentionally override more specific routes using path parameters.  The bug leads to the incorrect rendering of the 404 component even when a matching, more specific, route should be used.

## The Problem

When using path parameters with a catch-all route, the catch-all route will always take precedence, even if a more specific route exists. This happens because the wildcard (*) is the most general path pattern, and React Router matches routes based on their specificity.

## Solution

The solution involves careful ordering of routes.  Place more specific routes *before* less specific routes (like the catch-all route).  This ensures that React Router prioritizes the more specific routes first.
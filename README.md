# JabyGo – B2B Marketplace (MVP Phase 1)

## 📌 Overview

JabyGo is a B2B marketplace platform where **suppliers** and **buyers** connect, inspired by Amazon, Alibaba, and Etsy — but optimized for **hospitality businesses**.  
This repository contains both **frontend** and **backend** in a single monorepo.

## 📂 Project Structure

## 🛠️ Root Scripts

- `npm run install:all` → Install dependencies in both frontend & backend.
- `npm run dev` → Run frontend & backend concurrently.
- `npm run lint` → Run ESLint across the project.
- `npm run format` → Format code with Prettier.

## 🧹 Git Hooks

We use Husky to enforce code quality:

- Pre-commit hook runs `npm run lint`.

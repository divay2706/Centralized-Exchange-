# Centralized Exchange

A simulated centralized exchange backend built from scratch.

The system allows users to create accounts, deposit simulated funds,
place buy/sell orders, and have those orders matched automatically
through a custom-built price-time-priority matching engine.

> This is a simulated exchange. No real money or
> cryptocurrency is involved.

**Status:** In active development — started October 2026

## Core Features

- Account creation and authentication
- Wallet and asset management
- Double-entry-style ledger for financial records
- Deposit and withdrawal simulation
- Fund reservation/locking for open orders
- Buy and sell order placement
- Price-time-priority order book
- Custom-built matching engine
- Partial order fills
- Trade settlement through ledger entries
- Real-time order and trade updates using WebSockets

## Architecture

```text
User
  ↓
Authentication
  ↓
Wallet
  ↓
Ledger
  ↓
Order
  ↓
Order Book
  ↓
Matching Engine
  ↓
Trade
  ↓
Settlement / Ledger Update
  ↓
WebSocket Live Updates
import requests
import json
import time

HEADERS = {
    "User-Agent": "Mozilla/5.0",
    "Accept-Language": "en-US,en;q=0.9",
    "Referer": "https://www.nseindia.com/"
}

BASE_URL = "https://www.nseindia.com"
QUOTE_URL = "https://www.nseindia.com/api/quote-equity?symbol={symbol}"


def get_stock_data(symbol):
    """
    Fetch real-time stock data from NSE India for a given symbol (e.g., TCS, INFY)
    """
    session = requests.Session()
    session.headers.update(HEADERS)

    # First request to get cookies
    try:
        session.get(BASE_URL, timeout=5)
    except requests.exceptions.RequestException:
        print(f"[ERROR] NSE site may be blocking your IP or is unavailable.")
        return None

    try:
        url = QUOTE_URL.format(symbol=symbol.upper())
        response = session.get(url, timeout=5)
        response.raise_for_status()
        data = response.json()

        financials = data.get("metadata", {})
        key_ratios = data.get("keyIndicators", {})

        result = {
            "name": financials.get("companyName"),
            "symbol": financials.get("symbol"),
            "price": data.get("priceInfo", {}).get("lastPrice"),
            "pe": key_ratios.get("pe"),
            "roe": key_ratios.get("returnOnEquity"),
            "de_ratio": key_ratios.get("debtEquityRatio"),
            "sector": financials.get("industry"),
        }

        return result

    except Exception as e:
        print(f"[ERROR] Failed to fetch data for {symbol}: {e}")
        return None


def fetch_multiple(symbols):
    results = []
    for symbol in symbols:
        print(f"Fetching {symbol}...")
        data = get_stock_data(symbol)
        if data:
            results.append(data)
        time.sleep(1.5)  # Delay to avoid IP block
    return results


if __name__ == "__main__":
    symbols = ["TCS", "INFY", "RELIANCE", "HDFCBANK", "WIPRO"]
    stocks = fetch_multiple(symbols)

    with open("nse_stocks.json", "w") as f:
        json.dump(stocks, f, indent=2)

    print("✅ Data saved to nse_stocks.json")

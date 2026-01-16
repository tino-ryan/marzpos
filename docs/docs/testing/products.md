# Products – Import, Management & Verification

**Module:** UltimatePOS (Product Catalog & Variations)  
**Section:** Testing and Setup  
**Reference:** Live import of ~1400 products from old system + official UltimatePOS import documentation  
**Last Updated:** January 16, 2026  
**Prepared by:** Tinotenda Gozho (Tino)

## 1. Bulk Product Import (CSV) – ~1400 Products

**Status:** ✅ Successfully completed

Imported approximately **1400 products** from the previous system via CSV upload.

### Key Import Configuration & Decisions

- All **selling prices** in the imported file were treated as **inclusive of tax**
- Tax rate applied: **Standard rate – 15%**
- Selling Price Tax Type set to: **inclusive** for all products
- This ensured displayed/sold prices matched what customers were used to (no price jumps after import)

### CSV Template Column Structure (Exact Order Required)

| Column # | Column Name                              | Instruction / Required                                      | Notes / Values Used in Import                          |
|----------|------------------------------------------|-------------------------------------------------------------|--------------------------------------------------------|
| 1        | Product Name                             | **Required**                                                | —                                                      |
| 2        | Brand                                    | Optional                                                    | New brands auto-created if missing                     |
| 3        | Unit                                     | **Required**                                                | Set to "Pieces" for all (see Units section below)      |
| 4        | Category                                 | Optional                                                    | New categories auto-created                            |
| 5        | Sub category                             | Optional                                                    | New sub-categories auto-created under parent           |
| 6        | SKU                                      | Optional                                                    | Auto-generated when blank                              |
| 7        | Barcode Type                             | Optional (Default: C128)                                    | Mostly default                                         |
| 8        | Manage Stock?                            | **Required**                                                | 1 = Yes (almost all products)                          |
| 9        | Alert quantity                           | Optional                                                    | Set where applicable                                   |
| 10       | Expires in                               | Optional                                                    | —                                                      |
| 11       | Expiry Period Unit                       | Optional                                                    | days / months                                          |
| 12       | Applicable Tax                           | Optional (required if incl. vs excl. tax differs)           | Set to "Standard rate – 15%"                           |
| 13       | Selling Price Tax Type                   | **Required**                                                | inclusive (all products)                               |
| 14       | Product Type                             | **Required**                                                | single (variations skipped for now)                    |
| 15–16    | Variation Name / Values                  | Required only if variable                                   | Not used (all single products)                         |
| 17       | Variation SKUs                           | Optional (for variable)                                     | —                                                      |
| 18       | Purchase Price (Including Tax)           | Required if excl. not given                                 | Used where available                                   |
| 19       | Purchase Price (Excluding Tax)           | Required if incl. not given                                 | Used where available                                   |
| 20       | Profit Margin %                          | Optional                                                    | Fell back to business default when blank               |
| 21       | Selling Price                            | Optional                                                    | Auto-calculated if blank                               |
| 22       | Opening Stock                            | Optional                                                    | Set where data existed                                 |
| 23       | Opening stock location                   | Optional                                                    | Defaulted to first location                            |
| 24       | Expiry Date                              | Optional (mm-dd-yyyy)                                       | —                                                      |
| 25       | Enable Product description, IMEI or Serial Number | Optional (Default: 0)                              | 0 for most                                             |
| 26       | Weight                                   | Optional                                                    | —                                                      |
| 27–29    | Rack / Row / Position                    | Optional (per location)                                     | —                                                      |
| 30       | Image                                    | Optional (filename or URL)                                  | Mostly blank                                           |
| 31       | Product Description                      | Optional                                                    | —                                                      |
| 32–35    | Custom Field 1–4                         | Optional                                                    | —                                                      |
| 36       | Not for selling                          | Optional                                                    | 0 for all                                              |
| 37       | Product locations                        | Optional (comma-separated)                                  | Defaulted to all/active locations                      |

**Import observations:**

- No critical format/validation errors — all 1400 rows processed successfully
- Categories, sub-categories, and brands were auto-created during import → no manual setup needed
- Some products had missing purchase prices → system used defaults/profit margin where possible
- Stock quantities imported correctly where provided

## 2. Product List & Core Operations

**Status:** ✅ Fully working

- List page loads all ~1400 products without performance issues
- Search, filter (by name, category, brand, stock status) → fast and accurate
- Click to view detailed product → shows all fields correctly
- **Edit** button → full form loads and saves changes
- Export options: PDF, Excel, CSV → all tested and working
- Print labels page → generates correct labels with name, price (incl. tax), barcode, SKU, etc.

## 3. Related Product Features

| Feature                  | Status              | Notes / Current Decision                                      |
|--------------------------|---------------------|----------------------------------------------------------------|
| Add single product       | ✅ Working          | Form validation and save confirmed                             |
| Product Price page       | ✅ Working          | Can view/edit prices; export & import price lists tested      |
| Print Label              | ✅ Working          | Barcode + price + name layout good                             |
| Variations               | Partially configured| Works technically, but skipped for now (extra config per product unnecessary) |
| Units                    | ✅ Using "Pieces"   | All products sold/measured per item → single unit sufficient   |
| Categories               | ✅ Auto-created     | Imported via product CSV → hierarchy intact                    |
| Brands                   | ✅ Auto-created     | Same as categories — all good                                  |
| Warranties               | Not configured      | No products require warranties currently → left unset          |

## Summary – Current State

| Area                     | Status     | Comments / Next Steps                                      |
|--------------------------|------------|------------------------------------------------------------|
| Bulk import (~1400)      | ✅ Completed| Tax inclusive + 15% standard rate correctly applied        |
| Product list & search    | ✅ Working | Handles large catalog well                                 |
| Edit / View / Export     | ✅ Working | All export formats verified                                |
| Add product              | ✅ Working | —                                                          |
| Price management         | ✅ Working | Import/export prices confirmed                             |
| Label printing           | ✅ Working | Ready for daily use                                        |
| Variations               | Deferred   | Not needed at this stage                                   |
| Units / Categories / Brands | ✅ Good  | No further action required                                 |

**Next testing priorities (Products):**

- Stock adjustment & transfer flows (with imported opening stock)
- Low-stock / alert quantity notifications
- Barcode scanning in POS (using imported barcodes)
- Image upload / display verification (currently mostly blank)
- Round-trip export → edit → re-import (data integrity check)

Let me know the next section — Purchases, Stock Management, POS Sales Flows, Taxes/VAT Details, or Reports?
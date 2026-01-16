# Contacts (Customers & Suppliers) 

**Module:** UltimatePOS (Contact Management)  
**Section:** Testing and Setup  
**Reference:** Live system testing (import, CRUD, POS/stock integration) + official UltimatePOS documentation  
**Last Updated:** January 16, 2026  
**Prepared by:** Tinotenda Gozho (Tino)

## 1. Contact Import via CSV Template

**Status:** ✅ Working (with minor data quality notes)

Tested full import workflow:

1. Downloaded official CSV template from the system
2. Filled template with real data (mainly suppliers from Touch365 system export)
3. Imported successfully — no format errors on valid rows

### Template Column Structure (as shown in system)

| Column # | Column Name              | Instruction / Required                              | Notes / Options                                      |
|----------|--------------------------|-----------------------------------------------------|------------------------------------------------------|
| 1        | Contact type             | **Required**                                        | 1 = Customer, 2 = Supplier, 3 = Both                 |
| 2        | Prefix                   | Optional                                            | Mr, Mrs, Miss, Dr, etc.                              |
| 3        | First Name               | **Required**                                        | —                                                    |
| 4        | Middle name              | Optional                                            | —                                                    |
| 5        | Last Name                | Optional                                            | —                                                    |
| 6        | Business Name            | **Required** if type = Supplier or Both             | Company/trading name                                 |
| 7        | Contact ID               | Optional                                            | Leave blank → auto-generated                         |
| 8        | Tax number               | Optional                                            | VAT / Tax ID (added many as blank – to be updated later) |
| 9        | Opening Balance          | Optional                                            | —                                                    |
| 10       | Pay term                 | **Required** if type = Supplier or Both             | e.g. Net 30, Cash on Delivery                        |
| 11       | Pay term period          | **Required** if type = Supplier or Both             | days, months                                         |
| 12       | Credit Limit             | Optional                                            | —                                                    |
| 13       | Email                    | Optional                                            | —                                                    |
| 14       | Mobile                   | **Required**                                        | Primary phone number                                 |
| 15       | Alternate contact number | Optional                                            | —                                                    |
| 16       | Landline                 | Optional                                            | —                                                    |
| 17       | City                     | Optional                                            | —                                                    |
| 18       | State                    | Optional                                            | Province / Region                                    |
| 19       | Country                  | Optional                                            | —                                                    |
| 20       | Address line 1           | Optional                                            | —                                                    |
| 21       | Address line 2           | Optional                                            | —                                                    |
| 22       | Zip Code                 | Optional                                            | —                                                    |
| 23       | Date of birth            | Optional                                            | Format: Y-m-d (e.g. 2026-01-16)                      |
| 24–27    | Custom Field 1–4         | Optional                                            | System-defined or custom labels                      |

**Observations during import:**

- Rows with missing **required** fields (mobile, first name, etc.) failed gracefully with clear error messages per row
- Suppliers imported from Touch365 had many incomplete fields (tax number, address, pay terms) → imported successfully but flagged for cleanup
- Tax numbers mostly blank → planned manual update / second import pass
- No duplicate detection issues (system handled similar names fine)

## 2. Contact CRUD Operations

**Status:** ✅ Fully working

- **Add** single contact (customer or supplier) → works
- **Edit** existing contact → all fields updatable
- **Delete** contact → works (with confirmation); no cascade issues observed
- **View / List** → search, filter by type (customer/supplier/both), pagination all functional

No crashes or permission issues across Admin / Manager / Cashier roles.

## 3. Integration Points Tested

| Area                  | Tested Action                                      | Result      | Notes                                                                 |
|-----------------------|----------------------------------------------------|-------------|-----------------------------------------------------------------------|
| **POS**               | Search customer by name/mobile during sale         | ✅ Working  | Customers appear instantly; can link to sale; shows name on receipt   |
| **POS**               | Create new customer on-the-fly during transaction  | Not tested yet | —                                                                     |
| **Stock / Purchases** | Select supplier when adding stock / creating purchase | ✅ Working  | Supplier dropdown populated correctly from contact list               |
| **Purchases**         | Create purchase order / bill → supplier required   | ✅ Working  | Validation enforces supplier selection                                |
| **Reports**           | Supplier / Customer ledger, balance reports        | Partially tested | Basic view works; detailed aging reports pending                      |

## Summary – Current State

| Area                     | Status     | Comments / Next Steps                              |
|--------------------------|------------|----------------------------------------------------|
| CSV Import               | ✅ Working | Clean up incomplete supplier data (tax #, terms)   |
| Contact CRUD             | ✅ Working | All operations stable                              |
| POS Customer Linking     | ✅ Working | Search + attach confirmed                          |
| Stock / Purchase Supplier Selection | ✅ Working | Dropdown integration good                          |
| Opening balance import   | Not deeply tested | Plan to verify accounting impact                   |
| Custom fields usage      | Not tested | Verify if mapped correctly in reports/forms        |

**Next testing priorities (Contacts):**

- Import with duplicate mobile/email handling
- Opening balance → verify it reflects correctly in ledgers
- Customer credit limit enforcement in POS
- Bulk delete / archive inactive contacts
- Export contacts (CSV) → check if all fields round-trip correctly


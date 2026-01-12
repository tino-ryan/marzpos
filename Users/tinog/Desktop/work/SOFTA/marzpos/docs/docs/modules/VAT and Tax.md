#  VAT and Tax Configuration Documentation

**Module:** UltimatePOS (Core Tax Features)  
**Reference:** Based on official Ultimate Fosters documentation  
**Date:** January 06, 2026  
**Official Documentation Links:**  
- [Tax Settings Overview](https://ultimatefosters.com/docs/ultimatepos/tax-settings/)  
- [Tax Rates, Tax Groups & Disabling Tax](https://ultimatefosters.com/docs/ultimatepos/tax-settings/tax-rates-tax-groups/)  
- [Inline Tax & Invoice Tax](https://ultimatefosters.com/docs/ultimatepos/tax-settings/inline-tax-invoice-tax/)  
- [Business Settings (Tax Options)](https://ultimatefosters.com/docs/ultimatepos/settings/business-settings/)

## Table of Contents

- [Overview](#overview)
- [Business-Level Tax Registration](#business-level-tax-registration)
- [Configuring Tax Rates](#configuring-tax-rates)
- [Configuring Tax Groups](#configuring-tax-groups)
- [Applying Taxes to Products](#applying-taxes-to-products)
- [Tax Calculation Types (Inclusive vs Exclusive)](#tax-calculation-types-inclusive-vs-exclusive)
- [Inline Tax in Purchases and Sales](#inline-tax-in-purchases-and-sales)
- [Handling VAT-Registered vs Non-VAT-Registered Suppliers](#handling-vat-registered-vs-non-vat-registered-suppliers)
- [Tax Display and Reporting](#tax-display-and-reporting)
- [Best Practices for VAT Compliance](#best-practices-for-vat-compliance)

## Overview
<a id="overview"></a>

UltimatePOS provides fully customizable tax settings to support various tax systems, including VAT, GST, sales tax, or compound taxes (e.g., CGST + SGST). Taxes can be applied to sales, purchases, and invoices. Key features include:

- Individual **Tax Rates** (e.g., VAT @ 15%)
- **Tax Groups** for combining multiple taxes (summed automatically)
- Inclusive or exclusive tax pricing
- Inline tax display (per product line)
- Tax summary on invoices and reports

Taxes are configured globally and assigned per product.

## Business-Level Tax Registration
<a id="business-level-tax-registration"></a>

During business registration or in **Settings > Business Settings**:

- Enter your **Tax Name** (e.g., "VAT") and **Tax Number** (e.g., VAT registration number).
- This prints on invoices and is used for compliance.

## Configuring Tax Rates
<a id="configuring-tax-rates"></a>

1. Go to **Settings > Tax Rates > Add**
2. Enter a descriptive **Name** (e.g., "VAT @ 15%")
3. Specify the **Tax Rate %** (e.g., 15)
4. Save

**Notes:**
- You cannot delete a tax rate if it's used in a Tax Group or product.
- For zero-rated or exempt items, create a tax rate of 0% (e.g., "VAT Exempt @ 0%").

## Configuring Tax Groups
<a id="configuring-tax-groups"></a>

Use Tax Groups when multiple taxes apply (e.g., for GST: CGST + SGST).

1. In **Settings > Tax Rates** section, click **Add** under Tax Groups
2. Enter a **Name** (e.g., "Standard VAT")
3. Select sub-taxes to combine
4. The group rate auto-calculates as the **sum** of sub-taxes
5. Editing a sub-tax updates all linked groups automatically

**Example for Compound VAT/GST:**
- Create "VAT Output @ 10%" and "VAT Surcharge @ 5%"
- Group: "Total VAT @ 15%" (sum)

## Applying Taxes to Products
<a id="applying-taxes-to-products"></a>

When adding/editing a product (**Products > Add/Edit**):

- Select the **Applicable Tax** (single tax rate or group) from the dropdown.
- The selected tax applies automatically in sales and purchases.
- For varying taxes (e.g., some products zero-rated), assign different taxes per product.

**Tip:** For non-taxable products, select no tax or a 0% rate.

## Tax Calculation Types (Inclusive vs Exclusive)
<a id="tax-calculation-types-inclusive-vs-exclusive"></a>

- **Exclusive (Default):** Tax is added on top of the product price (e.g., Price R100 + VAT R15 = Total R115).
- **Inclusive:** Tax is included in the displayed price (e.g., Price R115 includes VAT R15; net R100).

**Settings:**
- In **Business Settings > Tax**, enable **"Display price including tax on POS screen"** for inclusive view.
- Product prices can be entered inclusive or exclusive during addition.

## Inline Tax in Purchases and Sales
<a id="inline-tax-in-purchases-and-sales"></a>

Inline tax shows tax per product line (instead of total only).

**Enable:**
- **Business Settings > Tax > Enable Inline Tax in purchase and sell**

**Display on Invoice:**
- Use "Detailed Invoice" layout
- **Settings > Invoice Settings > Invoice Layout**: Enable "Tax label"
- Inline tax prints next to each product

**Video Reference:** [Printing Inline Tax](https://youtu.be/auVVVhifgVw)

## Handling VAT-Registered vs Non-VAT-Registered Suppliers
<a id="handling-vat-registered-vs-non-vat-registered-suppliers"></a>

UltimatePOS does not have a direct "VAT Registered" flag on suppliers, but you can handle it via tax assignment:

- **VAT-Registered Suppliers:** Their invoices include VAT → Assign the appropriate tax rate/group to products purchased from them (tax is input VAT, reclaimable).
- **Non-VAT-Registered Suppliers:** No VAT charged → Assign "No Tax" or "VAT @ 0%" to those purchases/products.
- For mixed suppliers: Override tax per purchase line if needed (click product in purchase screen to modify tax).

**Contacts (Suppliers):**
- Add supplier VAT number in **Contact > Supplier > Tax Number** field for reference/printing.

**Purchases:**
- When adding a purchase, taxes apply based on product defaults but can be modified per line.

**Input VAT Reporting:**
- Tax reports show input (purchases) and output (sales) taxes for VAT returns.

## Tax Display and Reporting
<a id="tax-display-and-reporting"></a>

- **Invoices:** Tax summary (enable "Tax Summary Label" in Invoice Layout)
- **POS Screen:** Option to show prices inc. tax
- **Reports:**
  - Tax Report: Details input tax, output tax, expense tax
  - Sales/Purchase reports include tax breakdowns

## Best Practices for VAT Compliance
<a id="best-practices-for-vat-compliance"></a>

- Set your business VAT number early.
- Create separate tax rates: Standard VAT, Zero-Rated, Exempt.
- For non-VAT suppliers: Use 0% tax on relevant purchases to avoid incorrect input claims.
- Regularly review Tax Report for VAT return preparation.
- Use Tax Groups for complex VAT structures.
- Test invoices to ensure correct tax display (inclusive/exclusive as needed).

**PREPARED BY:** Tinotenda Gozho  
**DATE:** 05/01/2026

**For official updates:** Visit [Ultimate Fosters Documentation](https://ultimatefosters.com/docs/ultimatepos/)
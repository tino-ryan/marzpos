# HRM Module Documentation

**Module:** Essentials & HRM (Human Resource Management) Module for UltimatePOS  
**Reference:** Based on official documentation from Ultimate Fosters  
**Date:** January 06, 2026  
**Official Documentation Link:** [HRM Features in Essentials Module](https://ultimatefosters.com/docs/ultimatepos/essentials-hrm-module-addon/addon-essentials-module-for-ultimatepos-hrm-features/)

## Table of Contents

- [Overview](#overview)
- [Leave Management](#leave-management)
  - [Adding a Leave](#adding-a-leave)
  - [Leave Approval](#leave-approval)
  - [Leave Types (Admin Only)](#leave-types-admin-only)
  - [Leaves Summary](#leaves-summary)
- [Attendance Management](#attendance-management)
  - [Clock In/Out](#clock-inout)
  - [Settings](#settings)
  - [Location Tracking](#location-tracking)
  - [Biometric Integration](#biometric-integration)
  - [Shift Management](#shift-management)
- [Payroll Management](#payroll-management)
  - [Adding Payroll](#adding-payroll)
  - [Editing Payroll](#editing-payroll)
  - [Payments](#payments)
- [Holidays Management](#holidays-management)
- [Permissions & Settings](#permissions--settings)

## Overview
<a id="overview"></a>

The HRM module in the UltimatePOS system (part of the Essentials addon) is loaded with features to handle all aspects of personnel management, including payroll, attendance, leave management, holidays, shifts, sales targets, and other critical operations.

**Note:** This document explains the HRM (Human Resource Management) features in the Essentials module. For other features in the Essentials module, refer [here](https://ultimatefosters.com/docs/ultimatepos/addons/addon-essentials-module-for-ultimatepos-advance/).

After installing and configuring the Essentials module, you will see the **HRM** menu (along with the Essentials menu) in the left sidebar.

The HRM module consists of:

1. Leave Types & Leaves
2. Attendance
3. Payroll
4. Holidays
5. Shifts
6. Related Settings & Permissions

## Leave Management
<a id="leave-management"></a>

### Adding a Leave
<a id="adding-a-leave"></a>

- **Fields:** Leave Type (dropdown), Start Date, End Date, Reason (text area)
- Default status of a new leave: **Pending**
- Reference No.: Automatically generated (prefix configurable in HRM > Settings > Leave Reference No. prefix)
- Leave Instructions: Special instructions for users can be added in Settings > “Leave Instructions” field

### Leave Approval
<a id="leave-approval"></a>

- Admin (or users with "Approve Leave" permission) can change status: **Pending**, **Canceled**, **Approved** (click on status column button)
- **Approve Additional Leaves:** Checkbox to allow approval of leaves exceeding the max limit
- Notifications: In-app notification to admin on new leave; to user on status change
- Only admin can delete a leave

### Leave Types (Admin Only)
<a id="leave-types-admin-only"></a>

- **Fields:**
  - Leave Type: Name (e.g., "Sick Leave")
  - Max Leave Counts: Maximum allowed
  - Leave Count Interval: "Current month", "Current financial year", or "None"
- Example: 12 Sick Leaves per financial year

### Leaves Summary
<a id="leaves-summary"></a>

- Admin: View summary for any employee (filter on Leaves page)
- Users: Always visible for their own leaves (summary at bottom of page)

## Attendance Management
<a id="attendance-management"></a>

### Clock In/Out
<a id="clock-inout"></a>

- Users can clock in/out via top navigation bar ("Clock In" / "Clock Out" buttons) with notes
- Admin can add/edit attendance for any user
- Fields (Admin): Employee, Date, IP Address (auto), Note, Clock In Time, Clock Out Time
- Total work hours displayed (per user or own)

### Settings
<a id="settings"></a>

- **Allow users to enter their own attendance:** Enable in HRM > Settings > HRM tab or via Role permissions
- **Grace Time (for fixed shifts):**
  - Grace before/after check-in (late/early tolerance)
  - Grace before/after checkout

### Location Tracking
<a id="location-tracking"></a>

- Enable in HRM > Settings > Attendance Tab > "Is Location Required?"
- Requires HTTPS
- Accuracy: Better on mobile (GPS); approximate on laptop (IP-based)
- Map APIs: OpenStreetMap (free, default) or Google Maps (paid, more accurate – set GOOGLE_MAP_API_KEY in .env)

### Biometric Integration
<a id="biometric-integration"></a>

- Import attendance from biometric Excel export using "Import Attendance" feature
- Ensure date format: "Y-m-d H:i:s" and text format in Excel

### Shift Management
<a id="shift-management"></a>

#### Types of Shifts
- **Fixed Shift:** Specific start/end times; clock in/out only within allowed time (with grace)
- **Flexible Shift:** No specific timing; clock in/out anytime

#### Assigning Shifts
- Assign shifts to users for specific dates
- Error "No active shift at this time": No fixed shift available – add manually or adjust shifts

#### Auto Clock Out
- Enable to automatically clock out users at shift end

**Video Demonstration:** Available in official docs (e.g., https://youtu.be/Xu1yx6cXs2g)

## Payroll Management
<a id="payroll-management"></a>

- Admin only adds payroll; users view their own
- Reference No.: Auto-generated (prefix configurable in Settings)

### Adding Payroll
<a id="adding-payroll"></a>

- Select Employee, Month/Year
- Auto-calculates:
  - Total Work Duration (from attendance)
  - Duration Unit (e.g., hour/month)
  - Amount per Unit
  - Total = Duration × Amount per Unit
- Add Allowances (multiple) and Deductions
- Gross Amount = Total + Allowances – Deductions
- Notification to user on addition

### Editing Payroll
<a id="editing-payroll"></a>

- Via "All Payroll Groups" > Action > Edit

### Payments
<a id="payments"></a>

- Full Payment: Action > Payment
- Partial/Bulk Payments: Via "All Payroll Payment" tab > Add Payment (with notes)
- Bonus: Add as allowance with description "bonus"

## Holidays Management
<a id="holidays-management"></a>

- Admin only adds holidays
- Users view holidays for their location
- Fields: Name, Start Date, End Date, Business Location, Note

## Permissions & Settings
<a id="permissions--settings"></a>

### Key Permissions
- **Approve Leave:** Assign to roles for non-admin approval
- **Allow users to enter their own attendance:** Via Roles or HRM Settings

### HRM Settings
- Accessible via HRM > Settings
- Tabs: General, Leave, Attendance, Payroll, etc.
- Configure prefixes, instructions, location, etc.

## Additional Notes
- Compatible with SaaS/Superadmin module
- Recent Updates (as of 2025): Partial payroll payments, payment notes, employee birthday dashboard, etc.
- For sales targets and other Essentials features: Refer to separate documentation

**PREPARED BY:** Tinotenda Gozho  
**DATE:** 05/01/2026

**For official updates and videos:** Visit [Ultimate Fosters Documentation](https://ultimatefosters.com/docs/ultimatepos/)
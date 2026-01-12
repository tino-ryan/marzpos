---
sidebar_position: 1

---

# Welcome to MarzPOS Documentation

Welcome to the official documentation for **MarzPOS** - a comprehensive cloud-based POS and ERP system built on UltimatePOS by **SOFTA**, currently powering **Vape Garage**.

## System Overview

MarzPOS is deployed and running on a robust cloud infrastructure, providing reliable business management capabilities for retail operations.

### Deployment Information

- **Production Site**: [marzpos.com](https://marzpos.com)
- **Test Environment**: [marztest.marzpos.com](https://marztest.marzpos.com)
- **Hosting Platform**: cPanel
- **Database**: MySQL (Production and Test databases)
- **E-commerce Integration**: [Vape Garage WooCommerce](https://www.vapegarage.co.za/)

### Current Implementation

MarzPOS is currently deployed for **Vape Garage**, a retail operation that leverages the full suite of features including:
- Point-of-sale operations
- Inventory management for vape products
- WooCommerce integration with the online store
- Customer relationship management
- Financial reporting and accounting

## What is MarzPOS?

MarzPOS is an all-in-one business management solution built on the proven UltimatePOS platform by SOFTA. It streamlines operations from point-of-sale transactions to human resource management, providing enterprise-grade features for businesses of all sizes.

## Key Features

### 🛒 POS System
Fast and intuitive point-of-sale interface for seamless in-store transactions, supporting multiple payment methods and real-time inventory updates.

### 📦 Stock Management
Comprehensive inventory tracking with supplier management, reorder points, and multi-location visibility. Perfect for managing diverse product catalogs like vape products and accessories.

### 👥 Customer Management
Integrated CRM system for building customer relationships, tracking purchase history, managing loyalty programs, and running targeted marketing campaigns.

### 🛍️ WooCommerce Integration
Seamless synchronization between your physical store and online WooCommerce shop. Manage inventory, orders, and customers across all sales channels from one central platform.

### 💰 Accounting
Complete financial management tools including invoicing, expense tracking, tax calculations, and comprehensive financial reporting.

### 👔 HRM (Human Resource Management)
Manage your workforce efficiently with employee records, attendance tracking, payroll processing, and performance management.

### 📋 Project Planner
Plan, track, and manage projects with task assignment, timeline visualization, and team collaboration features.

### 📊 Reports & Analytics
Make data-driven decisions with comprehensive reports on sales, profits, inventory turnover, customer behavior, and more.

## System Architecture

```
┌─────────────────────────────────────────┐
│         Production Environment          │
│         marzpos.com (cPanel)            │
├─────────────────────────────────────────┤
│   MarzPOS Application (UltimatePOS)     │
│  ├─ PHP Backend                         │
│  ├─ MySQL Database                      │
│  └─ File Storage                        │
└─────────────────────────────────────────┘
              │
              ├── WooCommerce Integration
              │   └─> vapegarage.co.za
              │
              └── Test Environment
                  └─> marztest.marzpos.com
```

## Environment Details

### Production Environment
- **URL**: https://marzpos.com
- **Purpose**: Live production system for Vape Garage operations
- **Database**: Production MySQL database
- **Backup**: Regular automated backups
- **Monitoring**: Active monitoring and logging

### Test Environment
- **URL**: https://marztest.marzpos.com
- **Purpose**: Testing new features, updates, and configurations
- **Database**: Separate test MySQL database
- **Data**: Mirrors production structure with test data
- **Usage**: Safe environment for training and testing

## Quick Start Guide

### For Users

1. **Access the System**
   - Navigate to [marzpos.com](https://marzpos.com)
   - Log in with your credentials
   - Select your location/register

2. **Daily Operations**
   - Review [Standard Operating Procedures](sops/index)
   - Check [POS Operations Guide](sops/pos-operations)
   - Follow [Daily Operations Checklist](sops/daily-operations)

3. **Need Help?**
   - Check [Common Issues](troubleshooting/common-issues)
   - Review [FAQ](troubleshooting/faq)
   - Contact system administrator

### For Administrators

1. **System Configuration**
   - Access cPanel for server management
   - Review [Configuration Guide](getting-started/configuration)
   - Set up [Tax Settings](financial/vat-taxes)

2. **User Management**
   - Create user accounts
   - Assign roles and permissions
   - Configure departments

3. **Integration Setup**
   - Configure [WooCommerce Integration](modules/woocommerce-integration)
   - Set up payment gateways
   - Sync product catalogs

### For Developers

1. **Development Environment**
   - Use test environment: [marztest.marzpos.com](https://marztest.marzpos.com)
   - Review [Testing Documentation](testing/index)
   - Follow [Testing Guidelines](testing/testing-guidelines)

2. **API Integration**
   - Read [API Overview](api/overview)
   - Understand [Authentication](api/authentication)
   - Explore [API Endpoints](api/endpoints)

3. **Security**
   - Review [Malware Report](security/malware-report)
   - Follow [Security Best Practices](security/security-best-practices)

## Documentation Sections

### 📚 Module Documentation
Detailed guides for each MarzPOS module:
- [POS System](modules/pos-system)
- [Stock Management](modules/stock-management)
- [Customer Management](modules/customer-management)
- [WooCommerce Integration](modules/woocommerce-integration)
- [Accounting](modules/accounting)
- [HRM Module](modules/hrm/index)
- [Project Planner](modules/project-planner)
- [Reports & Analytics](modules/reports)

### 📋 Standard Operating Procedures
Step-by-step procedures for daily operations:
- [POS Operations](sops/pos-operations)
- [Inventory Procedures](sops/inventory-procedures)
- [Customer Service](sops/customer-service)
- [Daily Operations](sops/daily-operations)
- [Troubleshooting](sops/troubleshooting)

### 💼 Financial Management
Tax and accounting documentation:
- [VAT and Taxes](financial/vat-taxes)
- [Tax Configuration](financial/tax-configuration)
- [VAT Rates](financial/vat-rates)
- [Tax Reports](financial/tax-reports)

### 🧪 Testing & Quality Assurance
Testing documentation and guidelines:
- [Testing Overview](testing/index)
- [Unit Testing](testing/unit-testing)
- [Integration Testing](testing/integration-testing)
- [Test Coverage](testing/test-coverage)

### 🔒 Security
Security documentation and reports:
- [Malware Report](security/malware-report)
- [Security Best Practices](security/security-best-practices)
- [Vulnerability Assessment](security/vulnerability-assessment)

## Support & Resources

### Getting Help

**For Technical Issues:**
- Email: support@softa.com
- Check [Common Issues](troubleshooting/common-issues)
- Review [FAQ](troubleshooting/faq)

**For WooCommerce Integration:**
- Verify connection status in system settings
- Check [WooCommerce Integration Guide](modules/woocommerce-integration)
- Test on staging environment first

**For Training:**
- Review relevant SOPs
- Practice on test environment: [marztest.marzpos.com](https://marztest.marzpos.com)
- Contact your supervisor or system administrator

### Important Links

- **Production System**: [marzpos.com](https://marzpos.com)
- **Test System**: [marztest.marzpos.com](https://marztest.marzpos.com)
- **Vape Garage Online Store**: [vapegarage.co.za](https://www.vapegarage.co.za/)
- **cPanel Access**: Contact administrator for credentials

## About SOFTA

**MarzPOS** is developed and maintained by **SOFTA** - Tinotenda Gozho and Mckale.

Built on the UltimatePOS platform, MarzPOS extends and customizes the core functionality to meet the specific needs of modern retail operations like Vape Garage.

---

**Application**: MarzPOS  
**Developer**: SOFTA  
**Version**: 1.0  
**Last Updated**: January 2026  
**Platform**: UltimatePOS  
**Deployment**: cPanel
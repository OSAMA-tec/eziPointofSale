import './App.css';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Registration from './components/Registration';
import RepaiStatus from './components/RepaiStatus';
import Login from './components/login';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home1 from './components/dashboard/Home';
import Dashboard from './components/dashboard/Dashboard';
import User from './components/dashboard/Users/User';
import AddorEditUsers from './components/dashboard/Users/AddorEditUsers';
import ViewUser from './components/dashboard/Users/ViewUser';
import AllRoles from './components/dashboard/Roles/AllRoles';
import AddorEditRoles from './components/dashboard/Roles/AddorEditRoles';
import SalesCommission from './components/dashboard/Sales Commission Agent/SalesCommission';
import Contact from './components/dashboard/contacts/Contact';
import ViewContact from './components/dashboard/contacts/ViewContact';
import LedgerTab from './components/dashboard/contacts/LedgerTab';
import PurchasesTab from './components/dashboard/contacts/PurchasesTab';
import StockReportTab from './components/dashboard/contacts/StockReportTab';
import DocTable from './components/dashboard/Tables/DocTable';
import PaymentsTab from './components/dashboard/contacts/PaymentsTab';
import ActivitiesTable from './components/dashboard/Tables/ActivitiesTable';
import SalesTab from './components/dashboard/contacts/SalesTab';
import RewardsTab from './components/dashboard/contacts/RewardsTab';
import AddorEditPurchase from './components/dashboard/Purchases/AddorEditPurchase';
import ImporContact from './components/dashboard/contacts/ImportContact';
import CustomerGroup from './components/dashboard/contacts/CustomerGroup';
import AddorEditSell from './components/dashboard/sell/AddorEditSell';
import AddorEditProduct from './components/dashboard/Product/AddorEditProduct';
import PurchaseOrder from './components/dashboard/Purchases/PurchaseOrder';
import AddorEditPurchaseOrder from './components/dashboard/Purchases/AddorEditPurchaseOrder';
import Purchase from './components/dashboard/Purchases/Purchase';
import PurchaseReturn from './components/dashboard/Purchases/PurchaseReturn';
import AddorEditPucReturn from './components/dashboard/Purchases/AddorEditPucReturn';
import Product from './components/dashboard/Product/Product';
import UpdatePrice from './components/dashboard/Product/UpdatePrice';
import ImportProducts from './components/dashboard/Product/ImportProducts';
import ImportOpeningStock from './components/dashboard/Product/ImportOpeningStock';
import PrintLables from './components/dashboard/Product/PrintLables';
import Variations from './components/dashboard/Product/variations/Variations';
import Units from './components/dashboard/Product/units/Units';
import SellingPriceGrp from './components/dashboard/Product/sellingPriceGrp/SellingPriceGrp';
import Categories from './components/dashboard/Product/category/Categories';
import Brand from './components/dashboard/Product/brands/Brand';
import Warranties from './components/dashboard/Product/warranties/Warranties';
import AddorEditSellingPriceGrps from './components/dashboard/Product/AddorEditSellingPriceGrps';
import AddOpeningStock from './components/dashboard/Product/openingStock/AddOpeningStock';
import Sells from './components/dashboard/sell/Sells';
import Draft from './components/dashboard/draft/Draft';
import Quotations from './components/dashboard/quotations/Quotations';
import Pos from './components/dashboard/Pos/Pos';
import AddPos from './components/dashboard/Pos/AddPos';
import Shipment from './components/dashboard/Shipments/Shipment';
import Discount from './components/dashboard/discount/Discount';
import ImportSale from './components/dashboard/sell/ImportSale';

import ListStockTransfer from "./components/dashboard/Stock Transfer/ListStockTransfer";
import AddStockTransfer from "./components/dashboard/Stock Transfer/AddStockTransfer";
import ProfitLossRpt from './components/dashboard/reports/ProfitLossRpt';
import ProfitByProductTbl from './components/dashboard/reportTables/ProfitByProductTbl';
import ProfitByCategoryTbl from './components/dashboard/reportTables/ProfitByCategoryTbl';
import ProfitByBrandTbl from './components/dashboard/reportTables/ProfitByBrandTbl';
import ProfitByLocatinTbl from './components/dashboard/reportTables/ProfitByLocatinTbl';
import ProfitByInvoiceTbl from './components/dashboard/reportTables/ProfitByInvoiceTbl';
import ProfitByDateTbl from './components/dashboard/reportTables/ProfitByDateTbl';
import ProfitByCustomer from './components/dashboard/reportTables/ProfitByCustomer';
import ProfitByDaysTbl from './components/dashboard/reportTables/ProfitByDaysTbl';
import PurchaseSaleRpt from './components/dashboard/reports/PurchaseSaleRpt';
import TaxRpt from './components/dashboard/reports/TaxRpt';
import InputTaxTbl from './components/dashboard/reportTables/InputTaxTbl';
import OutpuTaxTbl from './components/dashboard/reportTables/OutpuTaxTbl';
import ExpenseTaxTbl from './components/dashboard/reportTables/ExpenseTaxTbl';
import StockRpt from './components/dashboard/reports/StockRpt';
import ListStockAdjustment from './components/dashboard/Stock Adjustment/ListStockAdjustment';
import AddStockAdjustment from './components/dashboard/Stock Adjustment/AddStockAdjustment';
import StockAdjusmentRpt from './components/dashboard/reports/StockAdjusmentRpt';
import ItemRpt from './components/dashboard/reports/ItemRpt';
import ProductPurchaseRpt from './components/dashboard/reports/ProductPurchaseRpt';
import ProductSellRpt from './components/dashboard/reports/ProductSellRpt';
import PsrDetailedTbl from './components/dashboard/reportTables/PsrDetailedTbl';
import PsrDetialedWithPurchaseTbl from './components/dashboard/reportTables/PsrDetialedWithPurchaseTbl';
import PsrGroupedTbl from './components/dashboard/reportTables/PsrGroupedTbl';
import PsrCategoryTbl from './components/dashboard/reportTables/PsrCategoryTbl';
import PsrBrandTbl from './components/dashboard/reportTables/PsrBrandTbl';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/business/Register' element={<Registration />} />
          <Route path='/repair-status' element={<RepaiStatus />} />
          <Route path='/home' element={<Home1 />} >
            <Route path='' element={<Dashboard />} />
            <Route path='/home/users' element={<User />} />
            <Route path='/home/users/addusers' element={<AddorEditUsers />} />
            <Route path='/home/users/edituser/:id' element={<AddorEditUsers />} />
            <Route path='/home/users/viewuser/:id' element={<ViewUser />} />
            <Route path='/home/roles' element={<AllRoles />} />
            <Route path='/home/roles/addroles' element={<AddorEditRoles />} />
            <Route path='/home/roles/editroles/:id' element={<AddorEditRoles />} />
            <Route path='/home/sales-commission-agents' element={<SalesCommission />} />
            {/* <Route path='/home/contact/:type' element={<Contact />} />
            <Route path='/home/contact/view/:id' element={<ViewContact />} >
              <Route path='/home/contact/view/:id' element={<LedgerTab />} />
              <Route path='/home/contact/view/:id/ledger_tab' element={<LedgerTab />} />
              <Route path='/home/contact/view/:id/purchase_tab' element={<PurchasesTab />} />
              <Route path='/home/contact/view/:id/stock_report_tab' element={<StockReportTab />} />
              <Route path='/home/contact/view/:id/document_tab' element={<DocTable />} />
              <Route path='/home/contact/view/:id/payment_tab' element={<PaymentsTab />} />
              <Route path='/home/contact/view/:id/activities_tab' element={<ActivitiesTable />} />
              <Route path='/home/contact/view/:id/sales_tab' element={<SalesTab />} />
              <Route path='/home/contact/view/:id/rewards_tab' element={<RewardsTab />} /> */}
            <Route path='/home/contacts/:type' element={<Contact />} />
            <Route path='/home/contacts/:type/view/:id' element={<ViewContact />} >
              <Route path='/home/contacts/:type/view/:id/ledger_tab' element={<LedgerTab />} />
              <Route path='/home/contacts/:type/view/:id/purchase_tab' element={<PurchasesTab />} />
              <Route path='/home/contacts/:type/view/:id/stock_report_tab' element={<StockReportTab />} />
              {/* <Route path='/home/contact/view/:id/document_tab' element={<DocTable />} />
                <Route path='/home/contact/view/:id/payment_tab' element={<PaymentsTab />} />
                <Route path='/home/contact/view/:id/activities_tab' element={<ActivitiesTable />} />
                <Route path='/home/contact/view/:id/sales_tab' element={<SalesTab />} />
                <Route path='/home/contact/view/:id/rewards_tab' element={<RewardsTab />} /> */}

            </Route>
            <Route path='/home/contact/import' element={<ImporContact />} />
            <Route path='/home/contact/customer-group' element={<CustomerGroup />} />

            <Route path='/home/purchase' element={<Purchase />} />

            <Route path='/home/purchase/create' element={<AddorEditPurchase />} />
            <Route path='/home/purchase/edit/:id' element={<AddorEditPurchase />} />
            <Route path='/home/sells/create' element={<AddorEditSell />} />
            <Route path='/home/sells/edit/:id' element={<AddorEditSell />} />
            <Route path='/home/products/create' element={<AddorEditProduct />} />
            <Route path='/home/purchase-order' element={<PurchaseOrder />} />
            <Route path='/home/purchase-order/create' element={<AddorEditPurchaseOrder />} />
            <Route path='/home/purchase-order/eidt/:id' element={<AddorEditPurchaseOrder />} />
            <Route path='/home/purchase-return' element={<PurchaseReturn />} />
            <Route path='/home/purchase-return/create' element={<AddorEditPucReturn />} />
            <Route path='/home/purchase-return/edit/:id' element={<AddorEditPucReturn />} />
            <Route path='/home/products' element={<Product />} />
            <Route path='/home/update-product-price' element={<UpdatePrice />} />
            <Route path='/home/import-products' element={<ImportProducts />} />
            <Route path='/home/import-opening-stock' element={<ImportOpeningStock />} />
            <Route path='/home/lables/show' element={<PrintLables />} />
            <Route path='/home/variation-templates' element={<Variations />} />
            <Route path='/home/units' element={<Units />} />
            <Route path='/home/selling-price-group' element={<SellingPriceGrp />} />
            <Route path='/home/taxonomies/product' element={<Categories />} />
            <Route path='/home/brands' element={<Brand />} />
            <Route path='/home/warranties' element={<Warranties />} />
            <Route path='/home/products/add-selling-prices' element={<AddorEditSellingPriceGrps />} />
            <Route path='/home/opening-stock/add' element={<AddOpeningStock />} />
            <Route path='/home/sells' element={<Sells />} />
            <Route path='/home/sells/draft' element={<Draft />} />
            <Route path='/home/sells/quotations' element={<Quotations />} />
            <Route path='/home/pos' element={<Pos />} />


            <Route path='/home/sell/create' element={<AddorEditSell />} />
            <Route path='/home/sell/create/:type' element={<AddorEditSell />} />

            <Route path='/home/sells/:type/edit/:id' element={<AddorEditSell />} />


            {/* <Route path='/home/pos' element={<Pos />} /> */}
            <Route path='/home/import-sales' element={<ImportSale />} />

            <Route path='/home/shipments' element={<Shipment />} />
            <Route path='/home/discounts' element={<Discount />} />
            <Route path="/home/stock-transfer" element={<ListStockTransfer />} />
            <Route path="/home/stock-transfers/create" element={<AddStockTransfer />} />
            <Route path='/home/reports/profit-loss' element={<ProfitLossRpt />} >
              <Route path='/home/reports/profit-loss' element={<ProfitByProductTbl />} />

              <Route path='/home/reports/profit-loss/profit_by_products' element={<ProfitByProductTbl />} />
              <Route path='/home/reports/profit-loss/profit_by_categories' element={<ProfitByCategoryTbl />} />
              <Route path='/home/reports/profit-loss/profit_by_brands' element={<ProfitByBrandTbl />} />
              <Route path='/home/reports/profit-loss/profit_by_locations' element={<ProfitByLocatinTbl />} />
              <Route path='/home/reports/profit-loss/profit_by_invoice' element={<ProfitByInvoiceTbl />} />
              <Route path='/home/reports/profit-loss/profit_by_date' element={<ProfitByDateTbl />} />
              <Route path='/home/reports/profit-loss/profit_by_customer' element={<ProfitByCustomer />} />
              <Route path='/home/reports/profit-loss/profit_by_days' element={<ProfitByDaysTbl />} />

            </Route>
            <Route path='/home/reports/purchase-sell' element={<PurchaseSaleRpt />} />
            <Route path='/home/reports/tax-report' element={<TaxRpt />} >
              <Route path='/home/reports/tax-report' element={<InputTaxTbl />} />
              <Route path='/home/reports/tax-report' element={<InputTaxTbl />} />
              <Route path='/home/reports/tax-report/input_tax_tab' element={<InputTaxTbl />} />
              <Route path='/home/reports/tax-report/output_tax_tab' element={<OutpuTaxTbl />} />
              <Route path='/home/reports/tax-report/expense_tax_tab' element={<ExpenseTaxTbl />} />

            </Route>

            <Route path='/home/reports/product-sell-report' element={<ProductSellRpt />} >
              <Route path='/home/reports/product-sell-report' element={<PsrDetailedTbl />} />
              <Route path='/home/reports/product-sell-report/psr_detailed_tab' element={<PsrDetailedTbl />} />
              <Route path='/home/reports/product-sell-report/psr_detailed_with_purchase_tab' element={<PsrDetialedWithPurchaseTbl />} />
              <Route path='/home/reports/product-sell-report/psr_grouped_tab' element={<PsrGroupedTbl />} />
              <Route path='/home/reports/product-sell-report/psr_by_cat_tab' element={<PsrCategoryTbl />} />
              <Route path='/home/reports/product-sell-report/psr_by_brand_tab' element={<PsrBrandTbl />} />

            </Route>

            <Route path='/home/reports/stock-adjustments-report' element={<StockAdjusmentRpt />} />
            <Route path='/home/reports/item-report' element={<ItemRpt />} />
            <Route path='/home/reports/product-purchase-report' element={<ProductPurchaseRpt />} />

            <Route path='/home/reports/stock-report' element={<StockRpt />} />
            <Route path='/home/stock-adjustments' element={<ListStockAdjustment />} />
            <Route path='/home/stock-adjustments/create' element={<AddStockAdjustment />} />




          </Route>
          <Route path='/pos/create' element={<AddPos />} />
          <Route path='/pos/edit/:id' element={<AddPos />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

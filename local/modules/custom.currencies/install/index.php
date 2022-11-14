<?php
use Bitrix\Main\Application;
use Bitrix\Main\Loader;
use Bitrix\Main\ModuleManager;
use Custom\Currencies\CurrencyTable;

class custom_currencies extends CModule
{
	private const UPDATER_AGENT_NAME = "\\Custom\\Currencies\\Agents::currencyUpdaterAgent();";

	public function __construct()
	{
		$this->MODULE_ID = "custom.currencies";
		$this->MODULE_NAME = "Currencies";
		$this->MODULE_DESCRIPTION = "Currencies description";
		$this->MODULE_GROUP_RIGHTS = "N";
		$this->MODULE_VERSION = "0.1";
	}

	public function doInstall(): void
	{
		$this->installFiles();
		ModuleManager::registerModule($this->MODULE_ID);
		CAgent::AddAgent(
			self::UPDATER_AGENT_NAME,
			$this->MODULE_ID,
			"N",
			12 * 3600
		);
		$this->installDB();
	}

	public function doUninstall(): void
	{
		$this->uninstallDB();
		\CAgent::RemoveModuleAgents($this->MODULE_ID);
		\CAgent::RemoveAgent(
			self::UPDATER_AGENT_NAME,
			$this->MODULE_ID
		);
		$this->unInstallFiles();
		ModuleManager::unRegisterModule($this->MODULE_ID);
	}

	public function installDB(): void
	{
		if (Loader::includeModule($this->MODULE_ID)) {
			$tableName = CurrencyTable::getTableName();
			$connection = Application::getConnection();
			if (!$connection->isTableExists($tableName)) {
				CurrencyTable::getEntity()->createDbTable();
			}
		}
	}

	public function uninstallDB(): void
	{
		if (Loader::includeModule($this->MODULE_ID)) {
			$tableName = CurrencyTable::getTableName();
			$connection = Application::getConnection();
			if ($connection->isTableExists($tableName)) {
				$connection->dropTable($tableName);
			}
		}
	}

	public function installFiles()
	{
		CopyDirFiles(__DIR__ . "/components",
			$_SERVER["DOCUMENT_ROOT"]."/local/components", true, true);
	}

	public function unInstallFiles()
	{
		DeleteDirFilesEx("/local/components/custom/currencies");
	}


}
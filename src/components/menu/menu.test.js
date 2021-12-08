const should = require('chai').should()
const {promisify} = require('util')
const {Builder, By, Key} = require("selenium-webdriver")
const sleep= promisify(setTimeout)
//const {Eyes, Target, Configuration, BatchInfo} = require('@applitools/eyes-images')
//const {config} = require("chai");

describe('Header&FooterTesting', function () {
    this.timeout(300000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('firefox').build()
        vars = {}
        await driver.get("http://localhost:3000/")
        await driver.manage().window().setRect(839, 864)
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('HeaderLogoTesting', async function() {
        // Test name: Header&FooterTesting
        // Step # | name | target | value
        // 1 | click | id=Layer_1 |
        await driver.findElement(By.id("Layer_1")).click()
    })
    it('HeaderDropDownMissionsTesting', async function() {
        // Step # | name | target | value
        // 3 | click | css=.text-block |
        await driver.findElement(By.css(".text-block")).click()
        // 4 | click | linkText=Projects |
        await driver.findElement(By.linkText("Missions")).click()
        await sleep(4000)
    })
    it('HeaderDropDownEventsTesting', async function() {
        // Step # | name | target | value
        // 3 | click | css=.text-block |
        await driver.findElement(By.css(".text-block")).click()
        // 4 | click | linkText=Projects |
        await driver.findElement(By.linkText("Events")).click()
        await sleep(3000)
    })
    it('HeaderDropDownProjectTesting', async function() {
        // Step # | name | target | value
        // 3 | click | css=.text-block |
        await driver.findElement(By.css(".text-block")).click()
        // 4 | click | linkText=Projects |
        await sleep(2000)
        await driver.findElement(By.linkText("Projects")).click()
        await sleep(3000)
    })
    it('HeaderContactTesting', async function() {
        // Step # | name | target | value
        // 3 | click | css=.nav-link aka Contact |
        await driver.findElement(By.css(".nav-link")).click()
        await sleep(3000)
    })
    it('FooterPSUTesting', async function() {
        // Step # | name | target | value
        // 3 | click | css=.nav-link aka Contact |
        await driver.findElement(By.linkText("Penn State Behrend")).click()
        await sleep(3000)
    })
    it('FooterASUTesting', async function() {
        // Step # | name | target | value
        // 3 | click | css=.nav-link aka Contact |
        await driver.findElement(By.linkText("Arizona State University")).click()
        await sleep(3000)
    })
    it('FooterNASATesting', async function() {
        //Unable to access NASA Page due to InsecureCertificateError
        // Step # | name | target | value
        // 3 | click | css=.nav-link aka Contact |
        await sleep(3000)
        await driver.findElement(By.linkText("NASA")).click()
        await sleep(3000)
    })
    /*
    * Logic Table:
    * ---------------------------------------------------------
    * | Electrode Keeper | Gas Feed  | Heat Insert | Result   |
    * ---------------------------------------------------------
    * |     0            |      0    |   0         | base     | done
    * |     0            |      0    |   1         | heat     | done
    * |     0            |      1    |   0         | gas      | done
    * |     0            |      1    |   1         | internal | done
    * |     1            |      0    |   0         | keeper   | done
    * |     1            |      0    |   1         | k+h      | done
    * |     1            |      1    |   0         | k+g      | done
    * |     1            |      1    |   1         | external | done
    * */
    it('BaseDrawingTesting', async function(){
        await sleep(3000)
        await driver.findElement(By.id("LearningModeButton")).click()
        await sleep(3000)
    })

    it('HeatInsertTesting', async function(){
        await sleep(3000)
        await driver.findElement(By.id("LearningModeButton")).click()
        // activate heat insert scene
        await driver.findElement(By.id("HeatInsertToggle")).click()
        // deactivate heat insert scene
        await driver.findElement(By.id("HeatInsertToggle")).click()
        await sleep(3000)
    })

    it('GasFeedTesting', async function(){
        await sleep(3000)
        await driver.findElement(By.id("LearningModeButton")).click()
        // activate gas feed scene
        await driver.findElement(By.id("GasFeedToggle")).click()
        // deactivate gas feed scene
        await driver.findElement(By.id("GasFeedToggle")).click()
        await sleep(3000)
    })

    it('InternalPlasmaTesting1', async function(){
        await driver.get("http://localhost:3000/")
        await driver.manage().window().setRect(839, 864)
        await sleep(3000)
        await driver.findElement(By.id("LearningModeButton")).click()
        // activate heat insert scene
        await driver.findElement(By.id("HeatInsertToggle")).click()
        // activate gas feed scene
        await driver.findElement(By.id("GasFeedToggle")).click()
        await driver.findElement(By.id('nextButton')).click()
        await sleep(3000)
        // deactivate gas feed scene
        await driver.findElement(By.id("GasFeedToggle")).click()
    })

    it('InternalPlasmaTesting2', async function(){
        await driver.findElement(By.id("LearningModeButton")).click()
        // activate heat insert scene
        await driver.findElement(By.id("HeatInsertToggle")).click()
        // activate gas feed scene
        await driver.findElement(By.id("GasFeedToggle")).click()
        await driver.findElement(By.id('nextButton')).click()
        await sleep(3000)
        //deactivate heat insert scene
        await driver.findElement(By.id("HeatInsertToggle")).click()
    })

    it('ElectrodeKeeperTesting', async function(){
        await sleep(3000)
        await driver.findElement(By.id("LearningModeButton")).click()
        // activate keeper electrode scene
        await driver.findElement(By.id("KeeperElectrodeToggle")).click()
        // deactivate keeper electrode  scene
        await driver.findElement(By.id("KeeperElectrodeToggle")).click()
        await sleep(3000)
    })

    it('Keeper&HeaterTesting1', async function(){
        await driver.manage().window().setRect(839, 864)
        await sleep(3000)
        await driver.findElement(By.id("LearningModeButton")).click()
        // activate keeper electrode scene
        await driver.findElement(By.id("KeeperElectrodeToggle")).click()
        // activate heat insert  scene
        await driver.findElement(By.id("HeatInsertToggle")).click()
        await sleep(3000)
    })

    it('Keeper&HeaterTesting2', async function(){
        await sleep(3000)
        await driver.findElement(By.id("LearningModeButton")).click()
        // activate heat insert  scene
        await driver.findElement(By.id("HeatInsertToggle")).click()
        // activate keeper electrode scene
        await driver.findElement(By.id("KeeperElectrodeToggle")).click()
        await sleep(3000)
    })

    it('Keeper&GasTesting1', async function(){
        await sleep(3000)
        await driver.findElement(By.id("LearningModeButton")).click()
        // activate keeper electrode scene
        await driver.findElement(By.id("KeeperElectrodeToggle")).click()
        // activate gas feed  scene
        await driver.findElement(By.id("GasFeedToggle")).click()
        await sleep(3000)
    })

    it('Keeper&GasTesting2', async function(){
        await sleep(3000)
        await driver.findElement(By.id("LearningModeButton")).click()
        // activate gas feed  scene
        await driver.findElement(By.id("GasFeedToggle")).click()
        // activate keeper electrode scene
        await driver.findElement(By.id("KeeperElectrodeToggle")).click()
        await sleep(3000)
    })

    it('ExternalPlasmaPathTesting', async function(){
        let idList = ["HeatInsertToggle", "GasFeedToggle", "KeeperElectrodeToggle"]
        await driver.findElement(By.id("LearningModeButton")).click()
        await permute(idList, 0, idList.length-1)
        await sleep(5000)
    })

    async function permute(list, l, r){
        if(l==r){
            console.log(list+"\n")
            let i=0;
            while(i<3){
                let elements= await driver.findElements(By.id('nextButton'))
                if(elements!=0){
                    await driver.findElement(By.id('nextButton')).click()
                    await sleep(2000)
                }
                await driver.findElement(By.id(list[i++])).click()
                await sleep(3000)
            }
            await reset()
        }else {
            for (let i = l; i <= r; i++) {
                swap(list, l, i)
                await permute(list, l + 1, r)
                swap(list, l, i)
            }
        }
    }
    function swap(list, l, r){
        let tmp= list[l]
        list[l]= list[r];
        list[r]= tmp;
    }
    async function reset(){
        await driver.get("http://localhost:3000/")
        await driver.manage().window().setRect(839, 864)
        await driver.findElement(By.id("LearningModeButton")).click()
    }
});
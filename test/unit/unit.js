var chai = require('chai'),
    should = require('chai').should(),
    FetureToggleManager = require('../../lib/featureToggleManager');


describe("unit", function () {
    var featureToggleManager;

    beforeEach(function () {

        var features = [{
                name: 'test',
                isActive: true
            },
            {
                name: 'test2',
                isActive: true
            },
            {
                name: 'test3',
                isActive: false
            }
        ]

        featureToggleManager = new FetureToggleManager(features)

        featureToggleManager.setFeatures(features);
    });

    it('should initialize', function (done) {

        featureToggleManager._features.should.have.keys(['test','test2','test3'])

        done();
    });

    it('should get is active', function (done) {

        featureToggleManager.isActive('test').should.be.true

        done();
    });

    it('should set is active', function (done) {

        featureToggleManager.setActive('test',false)

        featureToggleManager.isActive('test').should.be.false

        done();
    });

    it('should set feature', function (done) {

        featureToggleManager.setFeature({
            name: 'test2',
            isActive: true
        })

        featureToggleManager.isActive('test2').should.be.true

        done();
    });

    it('should get feature', function (done) {

        var feature = {
            name: 'test2',
            isActive: true
        }

        featureToggleManager.setFeature(feature)

        featureToggleManager.getFeature('test2').should.eq(feature)

        done();
    });

    it('should feature exsist', function (done) {


        featureToggleManager.isExist('test').should.be.true
        done();
    });

    it('should get  active features', function (done) {


        featureToggleManager.getActiveFeatures().should.be.instanceof(Array);

        featureToggleManager.getActiveFeatures().length.should.be.eq(2);

        featureToggleManager.getActiveFeatures()[0].name.should.be.eq("test")

        done();
    });

})
;
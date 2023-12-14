"use strict";
// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicBucketPolicy = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class PublicBucketPolicy extends pulumi.ComponentResource {
    /**
     * Create a PublicBucketPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name, args, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.bucket === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bucket'");
            }
            resourceInputs["bucket"] = args ? args.bucket : undefined;
            resourceInputs["ownershipControls"] = undefined /*out*/;
            resourceInputs["publicAccessBlock"] = undefined /*out*/;
        }
        else {
            resourceInputs["ownershipControls"] = undefined /*out*/;
            resourceInputs["publicAccessBlock"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PublicBucketPolicy.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
    /**
     * Returns true if the given object is an instance of PublicBucketPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PublicBucketPolicy.__pulumiType;
    }
}
exports.PublicBucketPolicy = PublicBucketPolicy;
/** @internal */
PublicBucketPolicy.__pulumiType = 'aws-static-website:index:PublicBucketPolicy';
//# sourceMappingURL=publicBucketPolicy.js.map
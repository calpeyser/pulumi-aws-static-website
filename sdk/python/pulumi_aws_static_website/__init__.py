# coding=utf-8
# *** WARNING: this file was generated by Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from . import _utilities
import typing
# Export this package's modules as members:
from .provider import *
from .website import *
from ._inputs import *
_utilities.register(
    resource_modules="""
[
 {
  "pkg": "aws-static-website",
  "mod": "index",
  "fqn": "pulumi_aws_static_website",
  "classes": {
   "aws-static-website:index:Website": "Website"
  }
 }
]
""",
    resource_packages="""
[
 {
  "pkg": "aws-static-website",
  "token": "pulumi:providers:aws-static-website",
  "fqn": "pulumi_aws_static_website",
  "class": "Provider"
 }
]
"""
)
